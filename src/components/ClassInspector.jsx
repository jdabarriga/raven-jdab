import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import ClassIcon from '@mui/icons-material/Class';
import PaletteIcon from '@mui/icons-material/Palette';
import BoltIcon from '@mui/icons-material/Bolt';
import EditIcon from '@mui/icons-material/Edit';
import { GetModelAbstract, GetModelAccess } from "../structures/classModels";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditOffIcon from '@mui/icons-material/EditOff';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import { Switch} from "@material-tailwind/react";
import { os } from "@neutralinojs/lib"

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
          return "bg-gradient-to-b from-[#2922c6] to-[#b279f2]"; // Color for interface
        } else if (abstract) {
          return "bg-gradient-to-b from-orange-500 to-[#e9a14f]"; // Color for abstract 
        }
        else{
          return "bg-gradient-to-b from-[#181e29] to-[#465970]";
        }
      }
    const [name, setName] = useState(data.name);
      
    const handleInput = (e) => {
        setName(e.target.textContent);
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
      function getFinalOrStatic(isFinal, isStatic) {
        console.log("final: ", isFinal, "static: ", isStatic)
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

      const [isChecked, setIsChecked] = useState(false);
      
      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      }


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
            return "bg-black p-1"; // Default color for unknown types
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
      console.log('model acess type:',getAccessTypeIcon(GetModelAccess(data)))
    return (
    <div className={` overflow-y flex  border-4 border-white p-2 rounded ${getClassColor(GetModelAbstract(data), data.interface)} text-white rounded-xl w-[620px] h-[450px]`}>
        <div className= "bg-gray-900 rounded-xl flex-grow flex flex-col mt-7 p-2 overflow-y-auto">
            <div className="flex justify-end">
                <div className="items-center p-1 bg-black rounded-xl h-9 w-20 ">
                        {getClassIcon(data.static, data.final, data.static)}
                        {getFinalOrStatic(data.final, data.static)}&nbsp;
                </div>
            </div>
                <div
                    contentEditable
                    onInput={handleInput}
                    className="relative white flex border-2 border-white m-2 rounded-xl bg-yellow-600 text-white font-bold w-[40%] p-2 text-xl">
                    <div className="flex flex-wrap justify-center items-center w-full">
                        <span className="whitespace-wrap font-bold">{data.name}&nbsp;</span>
                        <EditIcon fontSize="small" className="rounded-xl" />
                    </div>
                </div>
                <div className="bg-gray-800 p-2 mt-2 rounded-xl m-2">
                  <div className="justify-start flex-row font-bold text-m p-2 text-left m-1 ml-3">
                      <div className="flex items-center">
                        <Tooltip title="Editable">
                          <EditIcon className='rounded-full p-1 bg-black' style={{ color: 'green' }}/> &nbsp; 
                        </Tooltip>
                          <strong class>Access </strong>
                          {/* <div className="border-2 border-white m-2 rounded-xl bg-green-600 text-white font-bold w-[40%] p-1 text-s text-center ml-10"> */}
                          <div className="ml-4 rounded-xl text-white">
                            <Box sx={{ minWidth: 120}}>
                                <FormControl fullWidth
                                  sx={{
                                    backgroundColor: '#c99928',
                                    color: 'white',
                                    borderWidth: '20px',
                                    fontWeight: "bold",
                                    borderRadius: '20px',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                      backgroundColor: '#ba8d25',
                                      cursor: 'pointer'
                                    },
                                    '& fieldset': {
                                      borderColor: 'white !important',
                                      color: 'white !important',
                                      borderRadius: '20px',    
                                      borderWidth: '2.5px'
                                    },
                                    '& .MuiInputLabel-root': {
                                      color: 'white !important', 
                                      '&:hover': { // Apply styles on hover
                                        backgroundColor: '#ba8d25', // Change hover background color here
                                        fontWeight: 'bold'
                                      },
                                      },
                                    '& .MuiSelect-select': { // Select the text inside the Select component
                                      color: 'white', // Change the font color here
                                      fontWeight: "bold",
                                    }
                                  }}
                                >
                                  <InputLabel>Type</InputLabel>
                                  <Select
                                    value={type}
                                    label="Age"
                                    onChange={handleChange}
                                    placeholder="Select"
                                    MenuProps={{
                                      MenuListProps: {
                                        style: { backgroundColor: '#c99928', color: 'white' }, // Change the background color here
                                      },
                                    }}
                                  >
                                    <MenuItem value={0}>Public</MenuItem>
                                    <MenuItem value={1}>Private</MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                          </div>
                              {/* {data.modifiers[0]} */}
                      </div>
                      <div className="flex items-center">
                          <Tooltip title="Not Editable">
                            <EditOffIcon className='rounded-full p-1 bg-black' style={{ color: 'red' }}/> &nbsp; 
                          </Tooltip>
                          <strong>Interface</strong>
                          <div className={`border-2 border-white m-2 rounded-xl ${data.interface ? 'bg-green-600' : 'bg-red-600'} text-white font-bold w-[15%] p-1 text-s text-center ml-7`}>
                              {data.interface ? 'True' : 'False'}
                          </div>
                      </div>

                      <div className="flex items-center">
                        <Tooltip title="Not Editable">
                          <EditOffIcon className='rounded-full p-1 bg-black' style={{ color: 'red' }}/> &nbsp; 
                        </Tooltip>
                          <strong>Extends</strong>
                          <div className="border-2 border-white m-2 rounded-xl bg-purple-600 text-white font-bold w-[40%] p-1 text-s text-center ml-9">
                              {data.extends}
                          </div>
                      </div>
                      <div className="flex items-center">
                        <Tooltip title="Not Editable">
                          <EditOffIcon className='rounded-full p-1 bg-black' style={{ color: 'red' }}/> &nbsp; 
                        </Tooltip>
                          <strong>Implements</strong>
                          <div className="flex">
                            {data.implements.map((interfaceName, index) => (
                                <div key={index} className="flex-auto border-2 border-white m-2 rounded-xl bg-pink-900 text-white font-bold w-[auto] p-1 text-s text-center ml-3">{interfaceName}</div>
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
                            <p className="text-left text-black">Name: <span className="text-white">{attribute.name}</span></p>
                            <p className="text-left text-black">Access: <span className="text-white">{attribute.modifiers}</span></p>
                            <p className="text-left text-black">Value: <span className="text-white">{attribute.value}</span></p>
                            <p className="text-left text-black">Type: <span className="text-white">{attribute.type}</span></p>
                            <p className="text-left text-black">Modifiers: <span className="text-white">{attribute.modifiers.join(', ')}</span></p>
                            <p className="text-left text-black">Line: <span className="text-white">{attribute.line}</span></p>
                            <button className=" border-1 border-white mt-1 text-white bg-gray-800 hover:bg-gray-900 p-2 rounded-xl items-center" onClick={ () => os.execCommand('code -g "' + data.filePath + '":' + attribute.line) }>
                              <div className="flex h-[20px] w-[70px] items-center justify-center !important">
                                <Tooltip title="Edit in IDE">
                                  <EditIcon style={{ color: 'white' }}/>
                                </Tooltip>
                              </div>
                            </button>
                          </div>
                      ))}
                      <div className="flex justify-center items-center p-4 rounded-xl m-2 ">
                        <button className="text-white bg-gray-700 hover:bg-gray-900 p-2 rounded-xl items-center" onClick={ () => os.execCommand('code -g "' + data.filePath + '":' + data.line) }>
                          <div className=" flex h-[40px] w-[30px] items-center justify-center">
                              <Tooltip title="Add Attribute">
                                <AddCircleIcon style={{ color: 'white' }}/>
                              </Tooltip>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-2 mt-2 rounded-xl m-2 p">
                  <strong>Methods</strong>
                  <div className="bg-gray-800 items-center">
                    <div className="flex flex-wrap justify-start">
                      {data.methods.map((method, index) => (
                        <div key={index} className={` border-white border-2 font-bold p-4 rounded-xl ${getAccessTypeIcon(method.modifiers.includes("public") ? "public" : "private")} rounded m-2`}>
                            <p className="text-left text-black">Name: <span className="text-white">{method.name}</span></p>
                            <p className="text-left text-black">Return: <span className="text-white">{method.return}</span></p>
                            <div className=" border-2 border-white rounded-xl bg-purple-900 m-2 items-center p-2">
                              <span>Parameters</span>
                              <div className="bg-purple-700 rounded-l rounded-r pl-2 pr-2">
                              {method.parameters.map((param, paramIndex) => (
                                <div>
                                  <p key={paramIndex} className="text-left text-black">
                                  Name: <span className="text-white">{param.name}</span>
                                  </p>
                                  <p key={paramIndex} className="text-left text-black">
                                  Value: <span className="text-white">{param.value}</span>
                                  </p>
                                  <p key={paramIndex} className="text-left text-black">
                                  Type: <span className="text-white">{param.type}</span>
                                  </p>
                                  <p key={paramIndex} className="text-left text-black">
                                  Line: <span className="text-white">{param.line}</span>
                                  </p>
                                </div>

                              ))}
                              </div>
                            </div>
                            <p className="text-left text-black">Modifiers: <span className="text-white">{method.modifiers.join(', ')}</span></p>
                            <p className="text-left text-black">Line: <span className="text-white">{method.line}</span></p>
                            <button className=" border-1 border-white mt-1 text-white bg-gray-800 hover:bg-gray-900 p-2 rounded-xl items-center" onClick={ () => os.execCommand('code -g "' + data.filePath + '":' + method.line) }>
                              <div className="flex h-[20px] w-[70px] items-center justify-center !important">
                                <Tooltip title="Edit in IDE">
                                  <EditIcon style={{ color: 'white' }}/>
                                </Tooltip>
                              </div>
                            </button>
                          </div>
                      ))}
                      <div className="flex justify-center items-center p-4 rounded-xl m-2 ">
                        <button className="text-white bg-gray-700 hover:bg-gray-900 p-2 rounded-xl items-center" onClick={ () => os.execCommand('code -g "' + data.filePath + '":' + data.line) }>
                          <div className=" flex h-[40px] w-[30px] items-center justify-center">
                              <Tooltip title="Add Method">
                                <AddCircleIcon style={{ color: 'white' }}/>
                              </Tooltip>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    </div>
    );
};

export default ClassInspector;