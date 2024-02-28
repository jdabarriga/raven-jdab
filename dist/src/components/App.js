"use strict";
exports.__esModule = true;
//import './App.css';
var folderUtils_1 = require("../logic/folderUtils");
var raven_logo_png_1 = require("../assets/raven-logo.png");
var App = function () {
    return (<div className="flex  justify-center items-center p-8 h-screen  bg-indigo-950 w-full">
      <header>
        
      </header>
      <div className='text-white mt-4 text-center'>
      <img className="w-[280px]" src={raven_logo_png_1["default"]} alt="Raven Logo"/>
        <p className=' text-4xl font-extrabold' style={{ fontFamily: 'Consolas' }}> R A V E N</p>
        <button className="mt-4 bg-indigo-800" onClick={folderUtils_1.SelectJavaProjectDirectory}>
          Open Project Directory
        </button>
      </div>
    </div>);
};
exports["default"] = App;
