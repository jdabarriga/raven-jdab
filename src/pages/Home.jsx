import React, { useState, useRef } from 'react';
import { RetrieveJavaClassModels } from '../logic/folderUtils';
import RavenLogo from '../assets/raven-logo.png';
import { CloseableTab, SidebarTab } from '../components';
import { Link } from 'react-router-dom';
import { os, filesystem, events } from "@neutralinojs/lib";
import './Welcome.css';

// Set this to true to have "Open Project Directory" auto generate example classes instead of opening the file picker
let developerMode = false;

let CurrentWatcherID = -1;

const Home = () => {
  const [data, setData] = useState([]);

  async function retrieveClassModel() {
    let classes = [];
    if (developerMode) {
      classes =  [
        {
          "name": "NissanGTR",
          "attributes": [
              {
                  "name": "speed",
                  "value": "value1",
                  "type": "string",
                  "modifiers": ["public"],
                  "line": 1
              },
              {
                  "name": "acceleration",
                  "value": "value2",
                  "type": "float",
                  "modifiers": ["private"],
                  "line": 2
              }
          ],
          "methods": [
              {
                  "name": "turbo",
                  "parameters": [
                      {
                          "name": "param1",
                          "value": "value1",
                          "type": "string",
                          "modifiers": ["public"],
                          "line": 3
                      }
                  ],
                  "return": "void",
                  "modifiers": ["public"],
                  "generics": [],
                  "line": 3
              },
              {
                  "name": "nos_activate",
                  "parameters": [],
                  "return": "string",
                  "modifiers": ["private"],
                  "generics": [],
                  "line": 4
              }
          ],
          "interface": false,
          "extends": "ParentClass",
          "implements": ["CarInterface", "VehicleInterface"],
          "modifiers": ["public", "abstract"],
          "generics": ["T"],
          "filePath": "/path/to/file",
          "line": 5
      },
      {
        name: "ConstructorClass",
        attributes: [
          {
            name: "x",
            value: "",
            type: "double",
            modifiers: [],
            line: 3
          }
        ],
        methods: [],
        interface: false,
        extends: "",
        implements: [],
        modifiers: [
          "public"
        ],
        generics: [],
        constructors: [
          {
            name: "ConstructorClass",
            parameters: [
              {
                name: "x",
                value: "",
                type: "double",
                modifiers: [],
                line: 4
              }
            ],
            return: "",
            modifiers: [],
            generics: [],
            line: 4
          }
        ],
        line: 2,
        filePath: ""
      },
      {
        name: "Instance",
        attributes: [
          {
            name: "obj",
            value: "MyObject",
            type: "MyObject",
            modifiers: [],
            line: 4
          }
        ],
        methods: [],
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

  events.on('watchFile', async (evt) => {
    if(CurrentWatcherID == evt.detail.id) {
        let classes = await RetrieveJavaClassModels(evt.detail.dir);
        setData(classes);
    }
  });

  const focusRef = useRef();

  return (
      <div className="text-white mt-0 text-center home-container" /*makes text white , centers text, for open directory button*/>
        <div className="bg-[#68666c] flex border-4 rounded-3xl"> {/* edits the white border outline of page */}
          <div className="w-2/8 p-2 bg-[black] rounded-3xl p-1 m-1.5 items-center justify-center"> {/* edits sidebar, p-width, m-gray outline width */}
            <div className='w-[17vw] justify-center items-center' /* this is the sidebar width */ > 
              <header className="flex flex-row mb-1">{/* edits vertical spacing between open directory and class names */}
                <Link to="/" className="mr-5">
                  <img src={RavenLogo} alt="Raven Logo" className="raven-logo" /> {/* can be edited in welcome.css file */}
                </Link>
                <button className="directory-button" onClick={retrieveClassModel}>Open Project Directory</button> {/* can be edited in welcome.css file */}
              </header>
              <div className=''>
                <SidebarTab sidetabs={data} handleFocusClass={focusRef} />
              </div>
          </div>
        </div>
        <div className="w-6/8 bg-[black] flex p-0 m-1 rounded-3xl border w-[70vw] h-[85vh] text-white"> {/* edits the outside border of the graph, the gray outline */}
          <div>
            <CloseableTab classData={data} focusRef={focusRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
