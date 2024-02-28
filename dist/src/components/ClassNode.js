"use strict";
exports.__esModule = true;
var react_1 = require("react");
var reactflow_1 = require("reactflow");
exports["default"] = (0, react_1.memo)(function (_a) {
    var data = _a.data, isConnectable = _a.isConnectable;
    return (<>
      <div className="class-node">
        <button value={data.classIndex} className="button" onClick={data.onClick}>{data.classData.name}</button>
        <div className="class-node" style={{ textAlign: "left" }}>
            <h2>Access: {data.classData.access}</h2>
            <h2>Extends: {data.classData["extends"]}</h2>
            <h2>Static: {data.classData.static.toString()}</h2>
            <h2>Abstract: {data.classData.abstract.toString()}</h2>
            <h2>Interface: {data.classData.interface.toString()}</h2>
            <h2>Attributes: </h2>
            <div className="class-node" style={{ textAlign: "left", fontSize: "75%" }}>
            {data.classData.attributes.map(function (attribute) { return (<h5>
                    - {attribute.name}
                </h5>); })}
            </div>
            <h2>Methods: </h2>
            <div className="class-node" style={{ textAlign: "left", fontSize: "75%" }}>
            {data.classData.methods.map(function (method) { return (<h5>
                    - {method.name}
                </h5>); })}
            </div>
        </div>
      </div>
    </>);
});
