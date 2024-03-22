import React, { memo } from 'react';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PublicIcon from '@mui/icons-material/Public';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import BoltIcon from '@mui/icons-material/Bolt';
import FlagIcon from '@mui/icons-material/Flag';
import Tooltip from '@mui/material/Tooltip';
import PaletteIcon from '@mui/icons-material/Palette';
import ClassIcon from '@mui/icons-material/Class';
import PublicOffIcon from '@mui/icons-material/PublicOff';
import EditIcon from '@mui/icons-material/Edit';
import { Handle, Position } from 'reactflow';
import { GetModelAccess, GetModelStatic, GetModelFinal, GetModelAbstract } from '../structures/classModels';
import { os, filesystem } from "@neutralinojs/lib";

// Function to determine the color class based on attribute type
function getAttributeType(type) {
  switch (type) {
    case "int":
      return "bg-pink-500 p-1";
    case "string":
      return "bg-yellow-600 p-1";
    case "double":
      return "bg-green-600 p-1";
    case "float":
      return "bg-pink-700 p-1";
    default:
      return "bg-black p-1"; // Default color for unknown types
  }
}

function getAccessTypeIcon(access) {
  switch (access) {
    case "public":
      return (
        <Tooltip title="Public">
          <LockOpenIcon fontSize='small'className='rounded-xl bg-green-600 p-1 hover:'/>
        </Tooltip>
      );
    case "private":
      return (
        <Tooltip title="Private">
          <LockIcon fontSize='small'className='rounded-xl bg-red-600 p-1' />
        </Tooltip>
      );
    default:
      return null; // No icon for other access types
  }
}

function getClassColor(abstract, interFace) {
  if (interFace) {
    return "bg-gradient-to-b from-[#2922c6] to-[#b279f2]"; // Color for interface
  } else if (abstract) {
    return "bg-gradient-to-b from-orange-500 to-[#e9a14f]"; // Color for abstract 
  }
  else{
    return "bg-gradient-to-b from-[#181e29] to-[#465970]";
  }
}
function getClassIcon(abstract, interFace, isStatic){
  if (interFace) {
    return (
      <Tooltip title="Interface">
        <AccountTreeIcon fontSize='medium' style={{ color: 'purple', margin:'2px' }}className='hover:'/>
      </Tooltip>
    );
  } else if (abstract ) {
    return (
      <Tooltip title="Abstract">
        <PaletteIcon fontSize='medium' style={{ color: 'orange', margin:'2px' }}
        className='hover:'/>
      </Tooltip>
    ); // Color for abstract
  }
  else{
    return (
      <Tooltip title='Class'>
        <ClassIcon fontSize='medium' style={{ color: 'white', margin:'2px' }}
        className='hover:'/>
      </Tooltip>
    );
  }
}
function getFinalOrStatic(isStatic, isFinal) {
  if (isFinal) {
    return (
      <Tooltip title="Final">
        <FlagIcon fontSize="small" className='ml-1 rounded-xl bg-blue-500 p-1 hover:' />
      </Tooltip>
    );
  } else if (isStatic) {
    return (
      <Tooltip title = "Static">
        <BoltIcon fontSize="small" className='ml-1 rounded-xl bg-yellow-500  hover:' />
      </Tooltip>
    );
  } else {
    return null; // No icon for non-final and non-static attributes
  }
}
function getClasAccess(access) {
  switch (access) {
    case "public":
      return (
        <Tooltip title="Public">
          <PublicIcon fontSize='small'className='rounded-xl bg-green-500  hover:'/>
        </Tooltip>
      );
    case "private":
      return (
        <Tooltip title="Private">
          <PublicOffIcon fontSize='small'className='rounded-xl bg-red-500 hover:' />
        </Tooltip>
      );
    default:
      return null; // No icon for other access types
  }
}
function getClasAccessColor(access) {
  switch (access) {
    case "public":
      return (
        "bg-green-600"
      );
    case "private":
      return (
        "bg-red-600"
      );
    default:
      return null; // No icon for other access types
  }
}

const ClassNode = memo(({ data, isConnectable }) => {
  return (
    <div className={`flex border-4 border-white p-2 overflow-auto rounded ${getClassColor(GetModelAbstract(data.classData), data.classData.interface)} text-white rounded-xl w-[300px] h-[350px]`}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className="flex flex-col flex-grow relative">
        <div className="flex flex-grow items-center justify-center">
          <div className="absolute top-0 right-0 p-1 bg-black rounded-xl">
            {getClassIcon(GetModelStatic(data.classData), GetModelFinal(data.classData), GetModelStatic(data.classData))}
            {getFinalOrStatic(GetModelFinal(data.classData), GetModelStatic(data.classData))}&nbsp;
          </div>
        </div>
        <div className= "bg-gray-900 rounded-xl flex-grow flex flex-col mt-7">
          <div className= "flex flex-row">
            <button value={data.classIndex} className="items-center flex border-2 border-white m-2 rounded-xl bg-yellow-700 font-small text-white font-bold w-[40%] p-1"
            onClick={data.onClick}>&nbsp;
              {getClasAccess(GetModelAccess(data.classData))}&nbsp;
              {getClasAccess(data.classData)}
              {data.classData.name}
          </button>
          <button className="items-center flex border-2 border-white m-2 rounded-xl bg-gray-700 font-small text-white font-bold p-1" onClick={ () => os.execCommand('code -g "' + data.classData.filePath + '":' + data.classData.line) }>
            <Tooltip title="Edit">
              <EditIcon fontSize='small'className='rounded-xl bg-white-500 hover:' />
            </Tooltip>
          </button>
          </div>
          <div className="flex items-center">
            <p className='font-bold text-[16px] mr-2 mt-2 ml-1'>ATTRIBUTES</p>
          </div>
          <div className="ml-2" style={{ textAlign: "left", fontSize: "15px" }}>
            {data.classData.attributes.map((attribute, index) => (
              <span onClick={ () => os.execCommand('code -g "' + data.classData.filePath + '":' + attribute.line) } className={`label inline-block rounded-xl ${getAttributeType(attribute.type)} mr-1 p-[2px] items-center justify-center`} key={index}>  &nbsp;
              {getAccessTypeIcon(GetModelAccess(attribute))}
              {getFinalOrStatic(GetModelStatic(attribute), GetModelFinal(attribute))}
              &nbsp;{attribute.name} &nbsp; </span>
            ))}
          </div>
          <div className="flex items-center">
            <p className='font-bold text-[16px] mr-2 mt-2 ml-1'>METHODS</p>
          </div>
          <div className="ml-2" style={{ textAlign: "left", fontSize: "15px" }}>
            {data.classData.methods.map((method, index) => (
              <span onClick={ () => os.execCommand('code -g "' + data.classData.filePath + '":' + method.line) } className={`label inline-block rounded-xl ${getAttributeType(method.type)} mr-1 p-[2px] items-center justify-center`} key={index}>  &nbsp;
              {getAccessTypeIcon(GetModelAccess(method))}
              {getFinalOrStatic(GetModelStatic(method), GetModelFinal(method))}
              &nbsp;{method.name} &nbsp; </span>
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