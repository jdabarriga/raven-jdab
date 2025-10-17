import Tooltip from '@mui/material/Tooltip';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
import { GetModelAbstract, GetModelAccess, GetModelStatic, GetModelFinal } from "../structures/classModels";
import { os, filesystem } from "@neutralinojs/lib"
import { getClassColor, getClassAccess, getMemberTypeColor, getClassIcon, getAccessTypeIcon } from '../logic/uxUtils'
import * as React from 'react';
import { fileStorage } from '../logic/fileStorage';

// Helper function to open code in IDE (desktop or web)
const openInIDE = async (filePath, lineNumber) => {
  // Check if we're in Neutralino (desktop mode)
  if (window.NL) {
    // Desktop mode - use VS Code command
    os.execCommand('code -g "' + filePath + '":' + lineNumber);
  } else {
    // Web mode - read the file and open in vscode.dev with content
    const fileName = filePath.split(/[\\/]/).pop();
    
    try {
      // Get the file handle from the stored files (assuming we have access to uploaded files)
      // We'll need to read the file content from the FileReader that was used during upload
      
      // For now, open vscode.dev with instructions
      // TODO: Integrate with file storage to pass actual content
      const message = `File: ${fileName}\nLine: ${lineNumber}\n\nOpening VS Code for the Web...`;
      
      // Create a simple HTML page with the file info that opens vscode.dev
      const vscodeUrl = `https://vscode.dev`;
      window.open(vscodeUrl, '_blank');
      
      // Copy file path to clipboard for easy navigation
      navigator.clipboard.writeText(fileName).catch(() => {
        console.log('Could not copy to clipboard');
      });
      
    } catch (error) {
      console.error('Error opening file:', error);
      alert(`Could not open file: ${fileName}`);
    }
  }
};

const ClassInspector = ({ data, createCodeEditorTab }) => {
  // Function to read file and open code editor tab
  const openCodeViewer = async (filePath, lineNumber) => {
    const fileName = filePath.split(/[\\/]/).pop();
    
    console.log('Opening file:', filePath, 'at line:', lineNumber);
    
    try {
      let content;
      
      // Check if we're in Neutralino (desktop mode)
      if (window.NL) {
        // Use Neutralino's filesystem API
        console.log('Reading file with Neutralino API:', filePath);
        content = await filesystem.readFile(filePath);
      } else {
        // Web mode - retrieve from file storage
        console.log('Reading file from storage:', filePath);
        content = fileStorage.getFile(filePath);
        
        if (!content) {
          // Try to find the file by filename only (in case path doesn't match exactly)
          const allPaths = fileStorage.getAllPaths();
          const matchingPath = allPaths.find(p => p.endsWith(fileName));
          
          if (matchingPath) {
            console.log('Found file by name:', matchingPath);
            content = fileStorage.getFile(matchingPath);
          } else {
            throw new Error(`File not found in storage. Available files: ${allPaths.join(', ')}`);
          }
        }
      }
      
      console.log('File content loaded, length:', content.length);
      
      // Create or update the code editor tab
      if (createCodeEditorTab) {
        createCodeEditorTab({ content, fileName, lineNumber, filePath });
      }
    } catch (error) {
      console.error('Error reading file:', error);
      console.error('File path was:', filePath);
      // Fallback: show with placeholder content
      if (createCodeEditorTab) {
        createCodeEditorTab({ 
          content: `// Could not load file content\n// File: ${fileName}\n// Path: ${filePath}\n// Error: ${error.message}\n\n// Available files in storage:\n${fileStorage.getAllPaths().map(p => `// - ${p}`).join('\n')}`, 
          fileName, 
          lineNumber,
          filePath 
        });
      }
    }
  };

  return (
    <div className={`mt-4 overflow-y flex flex-col border-4 border-white p-2 rounded ${getClassColor(GetModelAbstract(data), data.interface)} text-white rounded-xl w-[98%] h-[75vh] mx-auto`}>
      <div className="flex h-20">

        <Tooltip title="Open in VS Code">
          <button value={data.classIndex} className="p-4 w-[100%] flex-grow flex-row items-center flex border-2 border-white rounded-xl bg-black bg-opacity-20 hover:bg-opacity-50 text-xl text-white font-bold group transition-all"
            onClick={() => window.NL ? openInIDE(data.filePath, data.line) : openCodeViewer(data.filePath, data.line)}>
            {getClassAccess(GetModelAccess(data), "medium")}&nbsp;
            {data.name}
            <div className="flex flex-grow justify-end mr-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white bg-opacity-10 group-hover:bg-opacity-20 transition-all">
                <CodeIcon fontSize="small" />
                <span className="text-sm font-medium">Open</span>
              </div>
            </div>
          </button>
        </Tooltip>

        <div className="flex flex-grow justify-end">
          <div className="bg-gray-900 rounded-xl ml-2 p-3 items-center w-20">
            {getClassIcon(data.interface, GetModelAbstract(data))}
          </div>
        </div>

      </div>
      <div className="rounded-xl flex-grow flex flex-col mt-2 p-2 overflow-y-auto" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="p-2 mt-2 rounded-xl m-2" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="justify-start flex-row font-bold text-m p-2 text-left m-1 ml-3">
            <div className="flex items-center">
              <strong class>Access: </strong>
              &nbsp;
              {GetModelAccess(data) !== undefined ? GetModelAccess(data) : "Default (Package Private)"}
            </div>
            <div className="flex items-center">
              <strong>Interface: </strong>
              &nbsp;
              {data.interface ? 'Yes' : 'No'}
            </div>

            <div className="flex items-center">
              <strong>Extends: </strong>
              &nbsp;
              {data.extends}
            </div>
            <div className="flex items-center">
              <strong>Implements: </strong>
              &nbsp;
              <div className="flex">
                {data.implements.map((interfaceName, index) => (
                  <span>
                    {interfaceName}&nbsp;
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>

        <div className="p-2 mt-2 rounded-xl m-2 p" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <strong>Constructors</strong>
          <div className="items-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="flex flex-wrap justify-start">
              {data.constructors.map((constructor, index) => (
                <div key={index} className={` border-white border-2 font-bold p-1 rounded-xl bg-violet-700 rounded m-2`}>

                  <Tooltip title="Jump to code">
                    <button className="p-2 w-[100%] items-center border-2 border-white rounded-xl bg-black bg-opacity-20 hover:bg-opacity-50 hover:scale-105 text-l text-white font-bold mb-1 transition-all group"
                      onClick={() => window.NL ? openInIDE(data.filePath, constructor.line) : openCodeViewer(data.filePath, constructor.line)}>
                      <div className="flex items-center justify-center gap-1">
                        <LaunchIcon fontSize='small' />
                        <span className="text-xs">Jump to Code</span>
                      </div>
                    </button>
                  </Tooltip>

                  <div>
                    <div className="border-2 border-white rounded-xl bg-purple-900 items-center p-2">
                      <span>Parameters</span>

                      {constructor.parameters.map((param, paramIndex) => (

                        <div className={`bg-purple-800 rounded-l rounded-r pl-2 pr-2 mt-2`}>
                          <p key={paramIndex} className="text-left text-white">
                            Name: <span className="text-white">{param.name}</span>
                          </p>
                          <p key={paramIndex} className="text-left text-white">
                            Type: <span className="text-white">{param.type}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-2 mt-2 rounded-xl m-2 p" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <strong>Attributes</strong>
          <div className="items-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="flex flex-wrap justify-start">
              {data.attributes.map((attribute, index) => (
                <div key={index} className={` border-white border-2 font-bold p-1 rounded-xl ${getMemberTypeColor(attribute.type)} rounded m-2`}>

                  <Tooltip title="Jump to code">
                    <button className="p-2 w-[100%] flex-grow flex-row items-center flex border-2 border-white rounded-xl bg-black bg-opacity-20 hover:bg-opacity-50 hover:scale-105 text-l text-white font-bold transition-all group"
                      onClick={() => window.NL ? openInIDE(data.filePath, attribute.line) : openCodeViewer(data.filePath, attribute.line)}>
                      {getAccessTypeIcon(GetModelAccess(attribute))}&nbsp; 
                      {attribute.name}
                      <div className="flex flex-grow justify-end ml-1">
                        <div className="flex items-center gap-1 px-2 py-1 rounded bg-white bg-opacity-10 group-hover:bg-opacity-20">
                          <LaunchIcon fontSize='small' />
                        </div>
                      </div>
                    </button>
                  </Tooltip>

                  <div className="p-2 m-2 bg-black bg-opacity-60 rounded-lg space-y-2 border-2 border-white flex-grow">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded bg-blue-600 bg-opacity-50 text-xs font-semibold min-w-[60px]">Access:</span>
                      <span className="text-sm">{GetModelAccess(attribute)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded bg-purple-600 bg-opacity-50 text-xs font-semibold min-w-[60px]">Static:</span>
                      <span className="text-sm">{GetModelStatic(attribute) ? "Yes" : "No"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded bg-orange-600 bg-opacity-50 text-xs font-semibold min-w-[60px]">Final:</span>
                      <span className="text-sm">{GetModelFinal(attribute) ? "Yes" : "No"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded bg-green-600 bg-opacity-50 text-xs font-semibold min-w-[60px]">Value:</span>
                      <span className="text-sm">{attribute.value}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded bg-cyan-600 bg-opacity-50 text-xs font-semibold min-w-[60px]">Type:</span>
                      <span className="text-sm font-medium">{attribute.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-2 mt-2 rounded-xl m-2 p" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <strong>Methods</strong>
          <div className="items-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="flex flex-wrap justify-start">
              {data.methods.map((method, index) => (
                <div key={index} className={` border-white border-2 font-bold p-1 rounded-xl ${getMemberTypeColor(method.return)} rounded m-2`}>

                  <Tooltip title="Jump to code">
                    <button className="p-2 w-[100%] flex-grow flex-row items-center flex border-2 border-white rounded-xl bg-black bg-opacity-20 hover:bg-opacity-50 hover:scale-105 text-l text-white font-bold transition-all group"
                      onClick={() => window.NL ? openInIDE(data.filePath, method.line) : openCodeViewer(data.filePath, method.line)}>
                      {getAccessTypeIcon(GetModelAccess(method))}&nbsp; 
                      {method.name}
                      <div className="flex flex-grow justify-end ml-1">
                        <div className="flex items-center gap-1 px-2 py-1 rounded bg-white bg-opacity-10 group-hover:bg-opacity-20">
                          <LaunchIcon fontSize='small' />
                        </div>
                      </div>
                    </button>
                  </Tooltip>

                  <div className="mt-2">
                    <div className=" border-2 border-white rounded-xl bg-purple-900 items-center p-2 m-2">
                      <span>Parameters</span>

                      {method.parameters.map((param, paramIndex) => (

                        <div className={`bg-purple-800 rounded-l rounded-r pl-2 pr-2 mt-2`}>
                          <p key={paramIndex} className="text-left text-white">
                            Name: <span className="text-white">{param.name}</span>
                          </p>
                          <p key={paramIndex} className="text-left text-white">
                            Type: <span className="text-white">{param.type}</span>
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="p-2 m-2 bg-black bg-opacity-60 rounded-lg space-y-2 border-2 border-white flex-grow">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded bg-blue-600 bg-opacity-50 text-xs font-semibold min-w-[60px]">Access:</span>
                        <span className="text-sm">{GetModelAccess(method)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded bg-purple-600 bg-opacity-50 text-xs font-semibold min-w-[60px]">Static:</span>
                        <span className="text-sm">{GetModelStatic(method) ? "Yes" : "No"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded bg-orange-600 bg-opacity-50 text-xs font-semibold min-w-[60px]">Final:</span>
                        <span className="text-sm">{GetModelFinal(method) ? "Yes" : "No"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded bg-pink-600 bg-opacity-50 text-xs font-semibold min-w-[60px]">Return:</span>
                        <span className="text-sm font-medium">{method.return}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassInspector;