import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#1600dd;' }}
        isConnectable={isConnectable}
      />
      <div className="class-node">
        <button value={data.classIndex} className="button" onClick={ data.onClick } >{data.classData.name}</button>
        <div className="class-node" style={{textAlign: "left"}}>
            <h2>Access: {data.classData.access}</h2>
            <h2>Extends: {data.classData.extends}</h2>
            <h2>Static: {data.classData.static.toString()}</h2>
            <h2>Abstract: {data.classData.abstract.toString()}</h2>
            <h2>Interface: {data.classData.interface.toString()}</h2>
            <h2>Attributes: </h2>
            <div className="class-node" style={{textAlign: "left", fontSize: "75%"}}>
            {data.classData.attributes.map((attribute) => (
                <h5>
                    - {attribute.name}
                </h5>
            ))}
            </div>
            <h2>Methods: </h2>
            <div className="class-node" style={{textAlign: "left", fontSize: "75%"}}>
            {data.classData.methods.map((method) => (
                <h5>
                    - {method.name}
                </h5>
            ))}
            </div>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});