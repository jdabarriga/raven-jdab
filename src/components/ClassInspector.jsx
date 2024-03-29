import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import ClassIcon from '@mui/icons-material/Class';
import PaletteIcon from '@mui/icons-material/Palette';
import BoltIcon from '@mui/icons-material/Bolt';
import EditIcon from '@mui/icons-material/Edit';
import { GetModelAbstract } from "../structures/classModels";



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
                          <div className="border-2 border-white m-2 rounded-xl bg-green-600 text-white font-bold w-[40%] p-1 text-s text-center ml-10">
                              {data.modifiers[0]}
                          </div>
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
                  <div className="bg-gray-800 justify-center items-center">
                    <div className="flex flex-row">
                      {data.attributes.map((attribute, index) => (
                        <div key={index} className="p-4 rounded-xl bg-pink-800 rounded m-2 justify-center">
                          <p>Attribute Name: {attribute.name}</p>
                          <p>Access: {attribute.modifiers}</p>
                          <p>Value: {attribute.value}</p>
                          <p>Type: {attribute.type}</p>
                          <p>Modifiers: {attribute.modifiers.join(', ')}</p>
                          <p>Line: {attribute.line}</p>
                          <div className="bg-pink-900 rounded-xl flex flex-col ">
                            <p>Modifiers</p>
                            <div className="flex flex-row justify-center">
                            <p>Static:</p>
                            <input
                            type="checkbox"
                            id="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                            />
                            <p>Final:</p>
                            <input
                            type="checkbox"
                            id="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                            />
                            </div>
                            <div className="flex flex-row justify-center">
                            <p>Transient:</p>
                            <input
                            type="checkbox"
                            id="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                            />
                            <p>Volatile:</p>
                            <input
                            type="checkbox"
                            id="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                            />
                            </div>
                          </div>
                          
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