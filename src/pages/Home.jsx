import React, { useState, useRef } from 'react';
import { RetrieveJavaClassModels } from '../logic/folderUtils';
import RavenLogo from '../assets/raven-logo.png';
import { CloseableTab, SidebarTab } from '../components';
import { Link } from 'react-router-dom';
import { os, filesystem, events } from "@neutralinojs/lib"

let CurrentWatcherID = -1;

const Home = () => {
  const [data, setData] = useState([]);

  async function retrieveClassModel() {
    let projectDir = await os.showFolderDialog('Open a project Directory', {});
    if (CurrentWatcherID >= 0) await filesystem.removeWatcher(CurrentWatcherID);
    CurrentWatcherID = await filesystem.createWatcher(projectDir);
    let classes = await RetrieveJavaClassModels(projectDir);
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
    <div className="text-white mt-4 text-center" /*makes text white , centers text*/>
      <div className="bg-[#68666c] flex border-4 rounded-3xl"> {/* This is the sidebar. It takes up 2/8 of the horizontal space, has padding, a dark background, rounded corners, and centers its items. */}
        <div className="w-2/8 p-2 bg-[#282729] rounded-3xl p-2 m-2 items-center justify-center"> {/* This sets the width of the sidebar and makes sure items inside are centered both vertically and horizontally. */}
          <div className='w-[20vw] justify-center items-center' /* this is the sidebar width */ > 
            <header className="flex flex-row mb-4">{/* This is a link that goes back to the homepage of the app. It has some margin to the right. */}
              <Link to="/" className="mr-5">
                <img src={RavenLogo} alt="Raven Logo" className='w-[50px]' />
              </Link>
              <button className='rounded-3xl' onClick={retrieveClassModel}>Open Project Directory</button>
            </header>
            <div className=''>
              <SidebarTab sidetabs={data} handleFocusClass={focusRef} />
            </div>

          </div>
        </div>
        <div className="w-6/8 bg-[#1b1b24] flex p-2 m-2 rounded-3xl border w-[70vw] h-[90vh] text-white">
          <div>
            <CloseableTab classData={data} focusRef={focusRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
