import React, { useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import CloseIcon from '@mui/icons-material/Close';

const CodeViewer = ({ isOpen, onClose, fileContent, fileName, lineNumber }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && lineNumber) {
      // Jump to the specific line when editor is ready
      setTimeout(() => {
        editorRef.current.revealLineInCenter(lineNumber);
        editorRef.current.setPosition({ lineNumber, column: 1 });
      }, 100);
    }
  }, [lineNumber, fileContent]);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    
    // Jump to line after mount
    if (lineNumber) {
      editor.revealLineInCenter(lineNumber);
      editor.setPosition({ lineNumber, column: 1 });
      
      // Highlight the line
      editor.deltaDecorations([], [
        {
          range: {
            startLineNumber: lineNumber,
            startColumn: 1,
            endLineNumber: lineNumber,
            endColumn: 1000
          },
          options: {
            isWholeLine: true,
            className: 'highlighted-line',
            glyphMarginClassName: 'highlighted-line-glyph'
          }
        }
      ]);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div 
        className="relative w-[90vw] h-[90vh] bg-gray-900 rounded-xl shadow-2xl border-2 border-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b-2 border-white bg-gray-800">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              {fileName}
            </span>
            {lineNumber && (
              <span className="px-3 py-1 rounded-lg bg-blue-600 text-white text-sm font-semibold">
                Line {lineNumber}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <CloseIcon className="text-white" />
          </button>
        </div>

        {/* Monaco Editor */}
        <div className="h-[calc(100%-80px)]">
          <Editor
            height="100%"
            defaultLanguage="java"
            value={fileContent || '// File content not available'}
            theme="vs-dark"
            onMount={handleEditorDidMount}
            options={{
              readOnly: true,
              minimap: { enabled: true },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
              wordWrap: 'on',
              glyphMargin: true,
            }}
          />
        </div>

        {/* Custom CSS for highlighting */}
        <style>{`
          .highlighted-line {
            background-color: rgba(255, 215, 0, 0.2) !important;
            border-left: 3px solid #FFD700;
          }
          .highlighted-line-glyph {
            background-color: #FFD700;
            width: 5px !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CodeViewer;
