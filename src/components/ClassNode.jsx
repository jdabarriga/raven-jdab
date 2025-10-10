import React, { memo } from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import FlagIcon from '@mui/icons-material/Flag';
import Tooltip from '@mui/material/Tooltip';
import { Handle, Position } from 'reactflow';
import { GetModelAccess, GetModelStatic, GetModelFinal, GetModelAbstract } from '../structures/classModels';
import { os } from "@neutralinojs/lib";
import { getClassColor, getMemberTypeColor, getAccessTypeIcon, getClassIcon, getClassAccess, limitString } from '../logic/uxUtils'


function getFinalOrStatic(isStatic, isFinal) {
  if (isFinal && isStatic) {
    return (
      <span>
        <Tooltip title="Final">
          <FlagIcon fontSize="small" className='ml-1 rounded-xl bg-blue-500 p-1 hover:' />
        </Tooltip>
        <Tooltip title="Static">
          <BoltIcon fontSize="small" className='ml-1 rounded-xl bg-yellow-500  hover:' />
        </Tooltip>
      </span>
    );
  } else if (isFinal) {
    return (
      <Tooltip title="Final">
        <FlagIcon fontSize="small" className='ml-1 rounded-xl bg-blue-500 p-1 hover:' />
      </Tooltip>
    );
  } else if (isStatic) {
    return (
      <Tooltip title="Static">
        <BoltIcon fontSize="small" className='ml-1 rounded-xl bg-yellow-500  hover:' />
      </Tooltip>
    );
  } else {
    return null; // No icon for non-final and non-static attributes
  }
}

const ClassNode = memo(({ data, isConnectable }) => {
  return (
    <div className={`nowheel flex border-4 border-white p-2 rounded ${getClassColor(GetModelAbstract(data.classData), data.classData.interface)} text-white rounded-xl w-[400px] h-[500px]`}>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#1600dd' }}
        isConnectable={isConnectable}
      />
      <div className="flex flex-col flex-grow p-1 relative justify-center">
        <div className="flex flex-row h-10">
          <button value={data.classIndex} className="p-2 items-center flex border-2 border-white rounded-xl bg-black bg-opacity-20 hover:bg-opacity-50 font-small text-white font-bold w-[80%]"
            onClick={data.onClick}>
            {getClassAccess(GetModelAccess(data.classData))}&nbsp;
            {limitString(data.classData.name, 20)}
          </button>
          <div className="bg-gray-900 rounded-xl ml-2 w-16 h-10 flex items-center justify-center">
            {getClassIcon(data.classData.interface, GetModelAbstract(data.classData))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-2 flex-grow flex flex-col mt-3 overflow-auto">

          <div className="flex items-center">
            <p className='font-bold text-[16px] mr-2 ml-1'>ATTRIBUTES</p>
          </div>
          <div className="ml-2" style={{ textAlign: "left", fontSize: "15px" }}>
            {data.classData.attributes.map((attribute, index) => (
              <span onClick={() => os.execCommand('code -g "' + data.classData.filePath + '":' + attribute.line)} className={`m-1 cursor-pointer label inline-block rounded-xl ${getMemberTypeColor(attribute.type)} p-[2px] h-[28px] items-center justify-center`} key={index}>  &nbsp;
                {getAccessTypeIcon(GetModelAccess(attribute))}
                {getFinalOrStatic(GetModelStatic(attribute), GetModelFinal(attribute))}
                &nbsp;{limitString(attribute.name, 20)} &nbsp; </span>
            ))}
          </div>

          <div className="flex items-center">
            <p className='font-bold text-[16px] mr-2 mt-6 ml-1'>METHODS</p>
          </div>
          <div className="ml-2" style={{ textAlign: "left", fontSize: "15px" }}>
            {data.classData.methods.map((method, index) => (
              <span onClick={() => os.execCommand('code -g "' + data.classData.filePath + '":' + method.line)} className={`m-1 cursor-pointer label inline-block rounded-xl ${getMemberTypeColor(method.return)} mr-1 p-[2px] h-[28px] items-center justify-center`} key={index}>  &nbsp;
                {getAccessTypeIcon(GetModelAccess(method))}
                {getFinalOrStatic(GetModelStatic(method), GetModelFinal(method))}
                &nbsp;{limitString(method.name, 20)} &nbsp; </span>
            ))}
          </div>

        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
});


export default ClassNode;