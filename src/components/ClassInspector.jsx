import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import ClassIcon from '@mui/icons-material/Class';
import PaletteIcon from '@mui/icons-material/Palette';
import BoltIcon from '@mui/icons-material/Bolt';
import EditIcon from '@mui/icons-material/Edit';
import { GetModelAbstract } from "../structures/classModels";
import { Switch} from "@material-tailwind/react";
import AddCircleIcon from '@mui/icons-material/AddCircle';


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
                  <div className="justify-start flex-row font-bold text-m p-2 text-left m-1 ml-10">
                      <div className="flex items-center">
                          <strong>Access</strong> 
                          {/* <div className="border-2 border-white m-2 rounded-xl bg-green-600 text-white font-bold w-[40%] p-1 text-s text-center ml-10"> */}
                          <div className="ml-10 rounded-xl text-white">
                            <div className="height-[50px]">
                            <Box sx={{ minWidth: 120}}>
                                <FormControl fullWidth
                                  sx={{
                                    backgroundColor: '#38bc79',
                                    color: 'white',
                                    borderWidth: '20px',
                                    fontWeight: "bold",
                                    '& fieldset': {
                                      borderColor: 'white !important',
                                      color: 'white !important',
                                    },
                                    '& .MuiInputLabel-root': {
                                      color: 'white !important', 
                                      '&:hover': { // Apply styles on hover
                                        backgroundColor: '#164c30', // Change hover background color here
                                      },
                                      },
                                    '& .MuiSelect-select': { // Select the text inside the Select component
                                      color: 'white', // Change the font color here
                                      fontWeight: "bold"
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
                                        style: { backgroundColor: '#2e9360', color: 'white' }, // Change the background color here
                                      },
                                    }}
                                  >
                                    <MenuItem value={0}>Public</MenuItem>
                                    <MenuItem value={1}>Private</MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            </div>

                          </div>

                              {/* {data.modifiers[0]} */}
                      </div>
                      <div className="flex items-center">
                          <strong>Interface</strong>
                          <div className={`border-2 border-white m-2 rounded-xl ${data.interface ? 'bg-green-600' : 'bg-red-600'} text-white font-bold w-[15%] p-1 text-s text-center ml-7`}>
                              {data.interface ? 'True' : 'False'}
                          </div>
                      </div>

                      <div className="flex items-center">
                          <strong>Extends</strong>
                          <div className="border-2 border-white m-2 rounded-xl bg-purple-600 text-white font-bold w-[40%] p-1 text-s text-center ml-9">
                              {data.extends}
                          </div>
                      </div>
                      <div className="flex items-center">
                          <strong>Implements</strong>

                          {data.implements.map((interfaceName, index) => (
                              <div key={index} className="flex-auto border-2 border-white m-2 rounded-xl bg-pink-600 text-white font-bold w-[40%] p-1 text-s text-center ml-3">{interfaceName}</div>
                          ))}
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
                        </div>
                      ))}
                      <div className="flex justify-center items-center p-4 rounded-xl m-2">
                        <button className="text-white bg-gray-900 p-2 rounded-xl height-[120px]">
                          <AddCircleIcon />
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