"use strict";
exports.__esModule = true;
//import { SelectFolderPath } from '../logic/folderUtils';
var raven_logo_png_1 = require("../assets/raven-logo.png");
var react_router_dom_1 = require("react-router-dom");
var Welcome = function () {
    return (<div className='text-white mt-4 text-center flex flex-row'>
      <div className="w-1/3">
        <h1 className=' text-8xl font-extrabold underline' style={{ fontFamily: 'Consolas' }}> WELCOME </h1>
        <p className=' text-7xl font-extrabold' style={{ fontFamily: 'Consolas' }}> 2</p>
        <p className=' text-7xl font-extrabold underline' style={{ fontFamily: 'Consolas' }}> R A V E N</p>
        <p className="mt-10">2024 UNCO Properties Raven Inc.</p>

        <button className="w-[170px] mt-64 px-4 bg-black rounded-2xl  hover:border-[#646cff] border-[#2f315f] border-4 outline-none focus:outline-none">
          <react_router_dom_1.Link className="text-2xl font-bold text-[#646cff] " style={{ fontFamily: 'Consolas' }} to="/Home">Proceed</react_router_dom_1.Link>

        </button>

      </div>
      

      <div className="w-2/3">
      <img className="w-[780px]" src={raven_logo_png_1["default"]} alt="Raven Logo"/>
        {/* <button className="mt-4" onClick={SelectFolderPath}>
          Open Project Directory
        </button> */}
      </div>
      </div>);
};
exports["default"] = Welcome;
