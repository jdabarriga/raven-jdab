import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import ClassIcon from '@mui/icons-material/Class';
import PaletteIcon from '@mui/icons-material/Palette';
import BoltIcon from '@mui/icons-material/Bolt';
import EditIcon from '@mui/icons-material/Edit';
import PublicIcon from '@mui/icons-material/Public';
import { GetModelAbstract, GetModelAccess } from "../structures/classModels";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditOffIcon from '@mui/icons-material/EditOff';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import { Switch} from "@material-tailwind/react";
import { os } from "@neutralinojs/lib"
import PublicOffIcon from '@mui/icons-material/PublicOff';
import CategoryIcon from '@mui/icons-material/Category';

// dropdown imports
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const ClassInspector = ({data}) => {
    function getClassColor(abstract, interFace) {
      if (interFace) {
        return "bg-gradient-to-b from-[#2e1503] to-[#4d4505]"; // Color for interface
      } else if (abstract) {
        return "bg-gradient-to-b from-[#290316] to-[#630404]"; // Color for abstract 
      }
      else{
        return "bg-gradient-to-b from-[#0f052e] to-[#0c195e]";
      }
      }
    const [name, setName] = useState(data.name);
      
    const handleInput = (e) => {
        setName(e.target.textContent);
    }
    function getClassIcon(isInterface, isAbstract){
      if (isInterface) {
        return (
          <Tooltip title="Interface" className='items-center justify-center mr-1'>
            <AccountTreeIcon fontSize='large' style={{ color: 'white', margin:'4px' }}className='hover:'/>
          </Tooltip>
        );
      } else if (isAbstract) {
        return (
          <Tooltip title="Abstract" className='items-center justify-center mr-1'>
            <CategoryIcon fontSize='large' style={{ color: 'white', margin:'4px' }}
            className='hover:'/>
          </Tooltip>
        ); // Color for abstract
      }
      else{
        return (
          <Tooltip title='Class' className='items-center justify-center mr-1'>
            <ClassIcon fontSize='large' style={{ color: 'white', margin:'4px' }}
            className='hover:'/>
          </Tooltip>
        );
      }
    }
      function getClasAccess(access) {
        switch (access) {
          case "public":
            return (
              <Tooltip title="Public" className='items-center justify-center mr-4'>
                <PublicIcon fontSize='medium'className='rounded-xl bg-green-500  hover:'/>
              </Tooltip>
            );
          case "private":
            return (
              <Tooltip title="Private" className='items-center justify-center mr-4'>
                <LockIcon fontSize='medium'className='rounded-xl bg-red-500 hover:' />
              </Tooltip>
            );
          default:
            return (
              <Tooltip title="Default" className='items-center justify-center mr-4'>
                <PublicOffIcon fontSize='medium'className='rounded-xl bg-yellow-500 hover:' />
              </Tooltip>
            );
        }
      }

      const [isChecked, setIsChecked] = useState(false);

      //dropdown handle
      const [type, setType] = React.useState('');

      const handleChange = (event) => {
        setType(event.target.value);
      };

      function getAttributeType(type) { // set color attribute type
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
            return "bg-blue-700 p-1"; // Default color for unknown types
        }
      }
      function getAccessTypeIcon(access) {
        switch (access) {
          case "public":
            return (
              'bg-teal-700'
            );
          case "private":
            return (
              'bg-red-700'
            );
          default:
            return 'bg-gray-900'; // No icon for other access types
        }
      }
      return (
      <div className={` overflow-y flex flex-col border-4 border-white p-2 rounded ${getClassColor(GetModelAbstract(data), data.interface)} text-white rounded-xl w-auto h-[70vh]`}>
          
        <div className= "flex h-20">
          <Tooltip title="Edit in IDE">
            <button value={data.classIndex} className="p-4 w-[100%] flex-grow flex-row items-center flex border-2 border-white rounded-xl bg-black bg-opacity-20 hover:bg-opacity-50 text-xl text-white font-bold"
              onClick={ () => os.execCommand('code -g "' + data.filePath + '":' + data.line) }>
                {getClasAccess(GetModelAccess(data))}
                {data.name}
                <div className="flex flex-grow justify-end mr-2">
                  <EditIcon />
                </div>
            </button>
          </Tooltip>
          <div className="flex flex-grow justify-end">
            <div className="bg-gray-900 rounded-xl ml-2 p-3 items-center w-20">
              {getClassIcon(data.interface, GetModelAbstract(data))}
            </div>
          </div>
        </div>
          
          <div className= "bg-gray-900 rounded-xl flex-grow flex flex-col mt-2 p-2 overflow-y-auto">
                  <div className="bg-gray-800 p-2 mt-2 rounded-xl m-2">
                    <div className="justify-start flex-row font-bold text-m p-2 text-left m-1 ml-3">
                        <div className="flex items-center">
                            <strong class>Access: </strong>
                            &nbsp;
                            {GetModelAccess(data) !== undefined ? GetModelAccess(data) : "Default (Package Private)"}
                        </div>
                        <div className="flex items-center">
                            <strong>Interface: </strong>
                            &nbsp;
                            {data.interface ? 'True' : 'False'}
                        </div>

                        <div className="flex items-center">
                            <strong>Extends: </strong>
                            &nbsp;
                            {data.extends}
                        </div>
                        <div className="flex items-center">
                            <strong>Implements: </strong>
                            &nbsp;
                            <div className="flex">
                              {data.implements.map((interfaceName, index) => (
                                <span>
                                  {interfaceName}&nbsp;
                                </span>
                              ))}            
                            </div>
                            
                        </div>                   
                    </div>
                  </div>
                  <div className="bg-gray-800 p-2 mt-2 rounded-xl m-2 p">
                    <strong>Attributes</strong>
                    <div className="bg-gray-800 items-center">
                      <div className="flex flex-wrap justify-start">
                        {data.attributes.map((attribute, index) => (
                          <div key={index} className={` border-white border-2 font-bold p-4 rounded-xl ${getAttributeType(attribute.type)} rounded m-2`}>
                              <p className="text-left text-white">Name: <span className="text-white">{attribute.name}</span></p>
                              <p className="text-left text-white">Access: <span className="text-white">{attribute.modifiers}</span></p>
                              <p className="text-left text-white">Value: <span className="text-white">{attribute.value}</span></p>
                              <p className="text-left text-white">Type: <span className="text-white">{attribute.type}</span></p>
                              <p className="text-left text-white">Modifiers: <span className="text-white">{attribute.modifiers.join(', ')}</span></p>
                              <p className="text-left text-white">Line: <span className="text-white">{attribute.line}</span></p>
                              <button className=" border-1 border-white mt-1 text-white bg-gray-800 hover:bg-gray-900 p-2 rounded-xl items-center" onClick={ () => os.execCommand('code -g "' + data.filePath + '":' + attribute.line) }>
                                <div className="flex h-[20px] w-[70px] items-center justify-center !important">
                                  <Tooltip title="Edit in IDE">
                                    <EditIcon style={{ color: 'white' }}/>
                                  </Tooltip>
                                </div>
                              </button>
                            </div>
                        ))}
                        
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-2 mt-2 rounded-xl m-2 p">
                    <strong>Methods</strong>
                    <div className="bg-gray-800 items-center">
                      <div className="flex flex-wrap justify-start">
                        {data.methods.map((method, index) => (
                          <div key={index} className={` border-white border-2 font-bold p-4 rounded-xl ${getAccessTypeIcon(method.modifiers.includes("public") ? "public" : "private")} rounded m-2`}>
                              <p className="text-left text-white">Name: <span className="text-white">{method.name}</span></p>
                              <p className="text-left text-white">Return: <span className="text-white">{method.return}</span></p>
                              <div className=" border-2 border-white rounded-xl bg-purple-900 m-2 items-center p-2">
                                <span>Parameters</span>
                                
                                {method.parameters.map((param, paramIndex) => (

                                  <div className="bg-purple-700 rounded-l rounded-r pl-2 pr-2 mt-2">
                                    <p key={paramIndex} className="text-left text-white">
                                    Name: <span className="text-white">{param.name}</span>
                                    </p>
                                    <p key={paramIndex} className="text-left text-white">
                                    Value: <span className="text-white">{param.value}</span>
                                    </p>
                                    <p key={paramIndex} className="text-left text-white">
                                    Type: <span className="text-white">{param.type}</span>
                                    </p>
                                    <p key={paramIndex} className="text-left text-white">
                                    Line: <span className="text-white">{param.line}</span>
                                    </p>
                                  </div>

                                ))}
                            </div>
                            <p className="text-left text-white">Modifiers: <span className="text-white">{method.modifiers.join(', ')}</span></p>
                            <p className="text-left text-white">Line: <span className="text-white">{method.line}</span></p>
                            <button className=" border-1 border-white mt-1 text-white bg-gray-800 hover:bg-gray-900 p-2 rounded-xl items-center" onClick={ () => os.execCommand('code -g "' + data.filePath + '":' + method.line) }>
                              <div className="flex h-[20px] w-[70px] items-center justify-center !important">
                                <Tooltip title="Edit in IDE">
                                  <EditIcon style={{ color: 'white' }}/>
                                </Tooltip>
                              </div>
                            </button>
                          </div>
                      ))}
                      
                    </div>
                  </div>
                </div>
        </div>
    </div>
    );
};

export default ClassInspector;