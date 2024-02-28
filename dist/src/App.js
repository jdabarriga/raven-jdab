"use strict";
// import '../src/components/App.css';
// import { SelectFolderPath } from '../src/logic/folderUtils';
exports.__esModule = true;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={SelectFolderPath}>Open Project Directory</button>
//       </header>
//     </div>
//   );
// }
// export default App;
var react_router_dom_1 = require("react-router-dom");
var pages_1 = require("../src/pages");
var App = function () {
    return (<div className="flex justify-center items-center p-8 h-screen bg-transparent w-full">
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<pages_1.Welcome />}/>
        <react_router_dom_1.Route path="/Home" element={<pages_1.Home />}/>
      </react_router_dom_1.Routes>
    </div>);
};
exports["default"] = App;
