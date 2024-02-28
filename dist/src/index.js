"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
// import App from './components/App';
var App_1 = require("./App");
var lib_1 = require("@neutralinojs/lib");
var react_router_dom_1 = require("react-router-dom");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(<react_1["default"].StrictMode>
    <react_router_dom_1.BrowserRouter basename=''>
      <App_1["default"] />
    </react_router_dom_1.BrowserRouter>
  </react_1["default"].StrictMode>);
(0, lib_1.init)();
lib_1.events.on("windowClose", function () {
    lib_1.app.killProcess();
});
