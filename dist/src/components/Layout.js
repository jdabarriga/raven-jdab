"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var lab_1 = require("@mui/lab");
var CloseableTab_1 = require("./CloseableTab");
var Layout = function () {
    var _a = (0, react_1.useState)('1'), selectedTab = _a[0], setSelectedTab = _a[1];
    var handleChange = function (event, newValue) {
        setSelectedTab(newValue);
    };
    return (<div className='text-white bg-white'>
            <lab_1.TabContext value={selectedTab}>
            <lab_1.TabList className="border-2 border-#[2f222f] bg-gray-300 text-white rounded-2xl" onChange={handleChange} aria-label="lab API tabs example">
                <material_1.Tab className='text-white' label="Closable" value="1"/>
            </lab_1.TabList>
            <lab_1.TabPanel value="1" className='text-white'><CloseableTab_1["default"] /></lab_1.TabPanel>
        </lab_1.TabContext>
        </div>);
};
exports["default"] = Layout;
