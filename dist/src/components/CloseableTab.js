"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var lab_1 = require("@mui/lab");
var Close_1 = require("@mui/icons-material/Close");
var react_2 = require("react");
var reactflow_1 = require("reactflow");
var ClassNode_1 = require("./ClassNode");
require("reactflow/dist/style.css");
require("./ClassNode.css");
var initialNodes = [];
var initialEdges = [];
var nodeTypes = {
    classNode: ClassNode_1["default"]
};
var ClosableTab = function (_a) {
    var classData = _a.classData;
    var _b = (0, reactflow_1.useNodesState)(initialNodes), nodes = _b[0], setNodes = _b[1], onNodesChange = _b[2];
    var _c = (0, reactflow_1.useEdgesState)(initialEdges), edges = _c[0], setEdges = _c[1], onEdgesChange = _c[2];
    var onConnect = (0, react_2.useCallback)(function (params) { return setEdges(function (eds) { return (0, reactflow_1.addEdge)(params, eds); }); }, [setEdges]);
    //const [classData, setClassData] = useState();
    var _d = (0, react_1.useState)('1'), selectedTab = _d[0], setSelectedTab = _d[1];
    var _e = (0, react_1.useState)([]), tabs = _e[0], setTabs = _e[1];
    var _f = (0, react_1.useState)([]), panels = _f[0], setPanels = _f[1];
    var _g = (0, react_1.useState)(1), openTabsCount = _g[0], setOpenTabsCount = _g[1]; // Initial count with main tab
    (0, react_1.useEffect)(function () {
        // Automatically select main tab if there's only one tab
        if (openTabsCount === 1) {
            setSelectedTab('1');
        }
    }, [openTabsCount]);
    var handleChange = function (event, newValue) {
        setSelectedTab(newValue);
    };
    var createClassTab = function (data) {
        if (data === void 0) { data = undefined; }
        var newTab = {
            value: "".concat(openTabsCount + 1),
            label: "".concat(data.name)
        };
        setTabs(__spreadArray(__spreadArray([], tabs, true), [newTab], false));
        setPanels(__spreadArray(__spreadArray([], panels, true), [
            {
                value: "".concat(openTabsCount + 1),
                child: function () {
                    return <div style={{ textAlign: "left" }}>
                    <h1>{data.name}</h1>
                    <h2>Access: {data.access}</h2>
                    <h2>Extends: {data["extends"]}</h2>
                    <h2>Static: {data.static.toString()}</h2>
                    <h2>Abstract: {data.abstract.toString()}</h2>
                    <h2>Interface: {data.interface.toString()}</h2>
                    <h2>Attributes: </h2>
                    <div style={{ fontSize: "75%" }}>
                        {data.attributes.map(function (attribute) { return (<h3>
                                - {attribute.name}
                            </h3>); })}
                    </div>
                    <h2>Methods: </h2>
                    <div style={{ fontSize: "75%" }}>
                        {data.methods.map(function (method) { return (<h3>
                                - {method.name}
                            </h3>); })}
                    </div>
                </div>;
                }
            }
        ], false));
        setOpenTabsCount(openTabsCount + 1); // Increment count
        setSelectedTab("".concat(openTabsCount + 1)); // Select the newly created tab
    };
    (0, react_1.useEffect)(function () {
        var onClick = function (event) {
            var classIndex = Number(event.target.value);
            var classObject = classData[classIndex];
            createClassTab(classObject);
        };
        setNodes(function (nds) {
            return classData.map(function (cl, i) {
                var node = { id: cl.name, type: 'classNode', position: { x: (i * 200), y: 0 }, data: { onClick: onClick, classData: cl, classIndex: i } };
                return node;
            });
        });
    }, [classData, setNodes, createClassTab]);
    var createBlueBox = function () {
        var newTab = {
            value: "".concat(openTabsCount + 1),
            label: "Blue Box ".concat(openTabsCount + 1)
        };
        setTabs(__spreadArray(__spreadArray([], tabs, true), [newTab], false));
        setPanels(__spreadArray(__spreadArray([], panels, true), [
            {
                value: "".concat(openTabsCount + 1),
                child: function () { return <div style={{ height: '300px', width: '300px', backgroundColor: 'blue' }}/>; }
            }
        ], false));
        setOpenTabsCount(openTabsCount + 1); // Increment count
        setSelectedTab("".concat(openTabsCount + 1)); // Select the newly created tab
    };
    var createRedBox = function () {
        var newTab = {
            value: "".concat(openTabsCount + 1),
            label: "Red Box ".concat(openTabsCount + 1)
        };
        setTabs(__spreadArray(__spreadArray([], tabs, true), [newTab], false));
        setPanels(__spreadArray(__spreadArray([], panels, true), [
            {
                value: "".concat(openTabsCount + 1),
                child: function () { return <div style={{ height: '200px', width: '200px', backgroundColor: 'red' }}/>; }
            }
        ], false));
        setOpenTabsCount(openTabsCount + 1); // Increment count
        setSelectedTab("".concat(openTabsCount + 1)); // Select the newly created tab
    };
    var handleClose = function (value) {
        var tabArr = tabs.filter(function (t) { return t.value !== value; });
        setTabs(tabArr);
        var panelArr = panels.filter(function (p) { return p.value !== value; });
        setPanels(panelArr);
        setOpenTabsCount(openTabsCount - 1); // Decrement count
        setSelectedTab('1');
    };
    return (<div className="">
            <lab_1.TabContext value={selectedTab}>
                <lab_1.TabList onChange={handleChange} aria-label="lab API tabs example" className=" flex rounded-lg bg-gray-800 color-white w-full h-[65px] mb-4">
                    <material_1.Tab label="Main Tab" value="1" className=" pt-4 bg-black text-white rounded-l-lg mx-1" style={{ width: "150px", height: '72px', color: 'white' }}/>

                    {tabs.map(function (tab) { return (<material_1.Tab icon={<Close_1["default"] onClick={function () { return handleClose(tab.value); }}/>} iconPosition="end" className="bg-white hover:bg-gray-900 mb-4" style={{ color: 'white' }} key={tab.value} label={tab.label} value={tab.value}/>); })}
                </lab_1.TabList>
                <lab_1.TabPanel value="1">
                    <div style={{ width: "610px", height: "440px" }}>
                        <reactflow_1["default"] nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} proOptions={{ hideAttribution: true }} nodeTypes={nodeTypes}>
                            <reactflow_1.Controls />
                            <reactflow_1.Background variant="dots" gap={12} size={1}/>
                        </reactflow_1["default"]>
                    </div>
                </lab_1.TabPanel>
                {panels.map(function (panel) { return (<lab_1.TabPanel key={panel.value} value={panel.value}>
                        {panel.child()}
                    </lab_1.TabPanel>); })}
            </lab_1.TabContext>
        </div>);
};
exports["default"] = ClosableTab;
