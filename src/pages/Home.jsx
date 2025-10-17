import React, { useState, useRef } from 'react';
import { RetrieveJavaClassModels, RetrieveJavaClassModelsFromBrowser } from '../logic/folderUtils';
import { getDemoFiles } from '../logic/demoData';
import { JavaTokenizer } from '../logic/lexers';
import { LocateClasses } from '../logic/parser';
import RavenLogo from '../assets/raven-logo.png';
import { CloseableTab, SidebarTab } from '../components';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { Link } from 'react-router-dom';
import { os, filesystem, events } from "@neutralinojs/lib";
import { fileStorage } from '../logic/fileStorage';
import './Welcome.css';

// Check if Neutralino is available (desktop mode)
const isNeutralinoAvailable = () => {
  return typeof window !== 'undefined' && window.NL !== undefined;
};

// Set this to true to have "Open Project Directory" auto generate example classes instead of opening the file picker
let developerMode = false;

let CurrentWatcherID = -1;

const Home = () => {
  const [data, setData] = useState([]);
  const [demoTabCallback, setDemoTabCallback] = useState(null);
  const [classInspectorCallback, setClassInspectorCallback] = useState(null);
  const [sidebarData, setSidebarData] = useState([]);
  const fileInputRef = useRef(null);

  async function retrieveClassModel() {
    let classes = [];
    
    // Check if we're in web mode (no Neutralino)
    if (!isNeutralinoAvailable()) {
      // Trigger the hidden file input for browser-based file selection
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
      return;
    }
    
    if (developerMode) {
      classes =  [
        
      {
        name: "ExampleClass",
        attributes: [
          {
            name: "exampleInt",
            value: "",
            type: "int",
            modifiers: [],
            line: 4
          },
          {
            name: "exampleDouble",
            value: "",
            type: "double",
            modifiers: [],
            line: 4
          },
          {
            name: "exampleString",
            value: "",
            type: "String",
            modifiers: [],
            line: 4
          },
          {
            name: "exampleBool",
            value: "",
            type: "bool",
            modifiers: [],
            line: 4
          },
          {
            name: "exampleLong",
            value: "",
            type: "long",
            modifiers: [],
            line: 4
          }
        ],
        methods: [
          {
            name: "WWWWWWWWWWWWWWWWWW",
            parameters: [],
            return: "AAAA",
            modifiers: ["public", "final", "static"],
            generics: [],
            line: 0
          }
        ],
        interface: false,
        extends: "NissanGTR",
        implements: [],
        modifiers: [],
        generics: [],
        constructors: [],
        line: 2,
        filePath: ""
      }
      ]
    } else {
      let projectDir = await os.showFolderDialog('Open a project Directory', {});
      if (CurrentWatcherID >= 0) await filesystem.removeWatcher(CurrentWatcherID);
      CurrentWatcherID = await filesystem.createWatcher(projectDir);
      classes = await RetrieveJavaClassModels(projectDir);
    }
    setData(classes);
  }

  // Handle file selection in web mode
  async function handleFileSelection(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
      try {
        const javaFileCount = Array.from(files).filter(f => f.name.endsWith('.java')).length;
        console.log(`Selected ${files.length} total files, ${javaFileCount} are .java files`);
        const classes = await RetrieveJavaClassModelsFromBrowser(files);
        console.log('Successfully parsed', classes.length, 'classes');
        if (classes.length > 0) {
          setData(classes);
        } else {
          alert('No Java classes found in the selected files. Please make sure you selected a folder containing .java files.');
        }
      } catch (error) {
        console.error('Error parsing Java files:', error);
        alert(`Error parsing Java files: ${error.message}\n\nPlease check the console for details.`);
      }
    }
  }

  // Load demo data into a separate tab
  async function loadDemoData() {
    try {
      const demoFiles = await getDemoFiles();
      let classes = [];
      
      // Clear previous files and store demo files
      fileStorage.clear();
      
      for (const file of demoFiles) {
        // Store the demo file content for Code Editor
        fileStorage.storeFile(file.path, file.content);
        console.log(`Stored demo file: ${file.path}`);
        
        const tokenizer = new JavaTokenizer(file.content);
        let tokens = [];
        let token = tokenizer.getNextToken();
        while (token !== null) {
          tokens.push(token);
          token = tokenizer.getNextToken();
        }
        let fileClasses = LocateClasses(tokens);
        fileClasses.forEach(cl => {
          cl.filePath = file.path;
        });
        classes.push(...fileClasses);
      }
      
      console.log(`Total demo files stored: ${fileStorage.getAllPaths().length}`);
      
      // Call the callback to create/open demo tab
      if (demoTabCallback) {
        demoTabCallback(classes);
      }
    } catch (error) {
      console.error('Error loading demo data:', error);
      alert('Error loading demo. Please try again.');
    }
  }

  const focusRef = useRef();

  // Only set up file watcher in desktop mode
  React.useEffect(() => {
    if (isNeutralinoAvailable()) {
      const handleWatchFile = async (evt) => {
        if (!developerMode && CurrentWatcherID == evt.detail.id) {
            let classes = await RetrieveJavaClassModels(evt.detail.dir);
            setData(classes);
        }
      };
      
      events.on('watchFile', handleWatchFile);
      
      return () => {
      };
    }
  }, []);

  return (
    <div className="text-white mt-0 text-center home-container relative" /*makes text white , centers text, for open directory button*/>
      {/* Hidden file input for web mode */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelection}
        {...({ webkitdirectory: "", directory: "" })}
        multiple
        style={{ display: 'none' }}
        accept=".java"
      />
      <div className="flex border-4 rounded-3xl relative" style={{ backgroundColor: 'var(--border-secondary)', borderColor: 'var(--border-secondary)', borderWidth: '4px' }}> {/* edits the white border outline of page */}
        <ThemeSwitcher />
        <div className="w-2/8 p-2 rounded-3xl p-1 m-1.5 items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)', border: '3px solid var(--border-secondary)' }}> {/* edits sidebar, p-width, m-gray outline width */}
          <div className='w-[17vw] justify-center items-center' /* this is the sidebar width */ > 
            <header className="flex flex-col mb-1 gap-2">{/* edits vertical spacing between open directory and class names */}
              <div className="flex flex-row items-center">
                <Link to="/" className="mr-3">
                  <img src={RavenLogo} alt="Raven Logo" className="raven-logo" /> {/* can be edited in welcome.css file */}
                </Link>
                <button 
                  className="directory-button flex items-center text-sm px-3 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                  onClick={retrieveClassModel} 
                  style={{ 
                    background: 'linear-gradient(to right, var(--border-primary), var(--border-secondary))',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(to right, var(--accent), var(--accent-hover))';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(to right, var(--border-primary), var(--border-secondary))';
                    e.target.style.color = 'var(--text-primary)';
                  }}
                >
                  Upload Project
                </button>
              </div>
              <button 
                className="demo-button flex items-center justify-center text-sm px-3 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                onClick={loadDemoData}
                style={{ 
                  background: 'linear-gradient(to right, var(--accent), var(--accent-hover))',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(to right, var(--accent-hover), var(--accent))';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(to right, var(--accent), var(--accent-hover))';
                }}
              >
                🚀 Try Demo
              </button>
            </header>
            <div className=''>
              <SidebarTab sidetabs={sidebarData} handleFocusClass={focusRef} createClassInspectorTab={classInspectorCallback} />
            </div>
          </div>
        </div>
        <div className="p-0 m-1 rounded-3xl w-[70vw] h-[85vh]" style={{ backgroundColor: 'var(--bg-primary)', border: '3px solid var(--border-secondary)', color: 'var(--text-primary)' }}> {/* edits the outside border of the graph, the gray outline */}
          <CloseableTab classData={data} focusRef={focusRef} onDemoTabRequest={setDemoTabCallback} onSidebarDataChange={setSidebarData} onClassInspectorRequest={setClassInspectorCallback} />
        </div>
      </div>
    </div>
  );
}

export default Home;
