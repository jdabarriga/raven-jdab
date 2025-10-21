import React, { useEffect, useRef, useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditorTab = ({ fileData }) => {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const [themeVersion, setThemeVersion] = useState(0);

  useEffect(() => {
    if (editorRef.current && fileData?.lineNumber) {
      const lineNumber = parseInt(fileData.lineNumber);
      
      // Jump to the specific line when content changes
      setTimeout(() => {
        if (editorRef.current) {
          editorRef.current.revealLineInCenter(lineNumber);
          editorRef.current.setPosition({ lineNumber: lineNumber, column: 1 });
          editorRef.current.focus();
          
          // Re-apply highlighting
          editorRef.current.deltaDecorations([], [
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
      }, 200);
    }
  }, [fileData?.lineNumber, fileData?.content, fileData?.filePath]);

  // Function to update Monaco theme based on current CSS variables
  const updateMonacoTheme = (monaco) => {
    if (!monaco) return;
    
    // Get current theme colors from CSS variables
    const bgPrimary = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim();
    const bgSecondary = getComputedStyle(document.documentElement).getPropertyValue('--bg-secondary').trim();
    const textPrimary = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim();
    const borderPrimary = getComputedStyle(document.documentElement).getPropertyValue('--border-primary').trim();
    
    // Define custom theme to match current Raven theme
    monaco.editor.defineTheme('raven-theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': bgPrimary,
        'editor.lineHighlightBackground': bgSecondary,
        'editorLineNumber.foreground': borderPrimary,
        'editorLineNumber.activeForeground': textPrimary,
        'editor.selectionBackground': bgSecondary,
        'editor.inactiveSelectionBackground': bgPrimary,
      }
    });
    
    // Apply the custom theme
    monaco.editor.setTheme('raven-theme');
  };

  // Listen for theme changes
  useEffect(() => {
    let lastBgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim();
    
    const checkThemeChange = () => {
      const currentBgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim();
      if (currentBgColor !== lastBgColor && monacoRef.current) {
        lastBgColor = currentBgColor;
        updateMonacoTheme(monacoRef.current);
      }
    };

    // Poll for theme changes every 100ms
    const interval = setInterval(checkThemeChange, 100);

    // Also use MutationObserver as backup
    const observer = new MutationObserver(() => {
      checkThemeChange();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme', 'style']
    });

    // Also listen for custom theme change events if they exist
    const handleThemeChange = () => {
      if (monacoRef.current) {
        setTimeout(() => updateMonacoTheme(monacoRef.current), 50);
      }
    };
    
    window.addEventListener('themechange', handleThemeChange);

    return () => {
      clearInterval(interval);
      observer.disconnect();
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
    
    // Set initial theme
    updateMonacoTheme(monaco);
    
    // Jump to line after mount
    if (fileData?.lineNumber) {
      const lineNumber = parseInt(fileData.lineNumber);
      
      // Use setTimeout to ensure editor is fully loaded
      setTimeout(() => {
        editor.revealLineInCenter(lineNumber);
        editor.setPosition({ lineNumber: lineNumber, column: 1 });
        editor.focus();
        
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
      }, 100);
    }
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b-2 border-white" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold" style={{ color: 'var(--text-primary)', fontFamily: "'Orbitron', sans-serif" }}>
            {fileData?.fileName || 'Code Editor'}
          </span>
          {fileData?.lineNumber && (
            <span className="px-3 py-1 rounded-lg text-white text-sm font-semibold" style={{ backgroundColor: 'var(--accent)' }}>
              Line {fileData.lineNumber}
            </span>
          )}
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1 border-2 border-white m-2 rounded-lg overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="java"
          value={fileData?.content || '// No file selected\n// Click "Jump to Code" on any class member to view code here'}
          theme="raven-theme"
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
  );
};

export default CodeEditorTab;
