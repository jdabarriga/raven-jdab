import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import { GetModelAbstract, GetModelAccess, GetModelStatic, GetModelFinal } from "../structures/classModels";
import { os } from "@neutralinojs/lib"
import { getClassColor, getClassAccess, getMemberTypeColor, getClassIcon, getAccessTypeIcon } from '../logic/uxUtils'
import * as React from 'react';

const ClassInspector = ({ data }) => {
  return (
    <div className={` overflow-y flex flex-col border-4 border-white p-2 rounded ${getClassColor(GetModelAbstract(data), data.interface)} text-white rounded-xl w-auto h-[70vh]`}>
      <div className="flex h-20">

        <Tooltip title="Edit in IDE">
          <button value={data.classIndex} className="p-4 w-[100%] flex-grow flex-row items-center flex border-2 border-white rounded-xl bg-black bg-opacity-20 hover:bg-opacity-50 text-xl text-white font-bold"
            onClick={() => os.execCommand('code -g "' + data.filePath + '":' + data.line)}>
            {getClassAccess(GetModelAccess(data), "medium")}&nbsp;
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
      <div className="bg-gray-900 rounded-xl flex-grow flex flex-col mt-2 p-2 overflow-y-auto">
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
              {data.interface ? 'Yes' : 'No'}
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
          <strong>Constructors</strong>
          <div className="bg-gray-800 items-center">
            <div className="flex flex-wrap justify-start">
              {data.constructors.map((constructor, index) => (
                <div key={index} className={` border-white border-2 font-bold p-1 rounded-xl bg-violet-700 rounded m-2`}>

                  <Tooltip title="Edit in IDE">
                    <button className="p-1 w-[100%] items-center border-2 border-white rounded-xl bg-black bg-opacity-20 hover:bg-opacity-50 text-l text-white font-bold mb-1"
                      onClick={() => os.execCommand('code -g "' + data.filePath + '":' + constructor.line)}>
                      <div className="m-1">
                        <EditIcon fontSize='small' />
                      </div>
                    </button>
                  </Tooltip>

                  <div>
                    <div className="border-2 border-white rounded-xl bg-purple-900 items-center p-2">
                      <span>Parameters</span>

                      {constructor.parameters.map((param, paramIndex) => (

                        <div className={`bg-purple-800 rounded-l rounded-r pl-2 pr-2 mt-2`}>
                          <p key={paramIndex} className="text-left text-white">
                            Name: <span className="text-white">{param.name}</span>
                          </p>
                          <p key={paramIndex} className="text-left text-white">
                            Type: <span className="text-white">{param.type}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-2 mt-2 rounded-xl m-2 p">
          <strong>Attributes</strong>
          <div className="bg-gray-800 items-center">
            <div className="flex flex-wrap justify-start">
              {data.attributes.map((attribute, index) => (
                <div key={index} className={` border-white border-2 font-bold p-1 rounded-xl ${getMemberTypeColor(attribute.type)} rounded m-2`}>

                  <Tooltip title="Edit in IDE">
                    <button className="p-2 w-[100%] flex-grow flex-row items-center flex border-2 border-white rounded-xl bg-black bg-opacity-20 hover:bg-opacity-50 text-l text-white font-bold"
                      onClick={() => os.execCommand('code -g "' + data.filePath + '":' + attribute.line)}>
                      {getAccessTypeIcon(GetModelAccess(attribute))}&nbsp; 
                      {attribute.name}
                      <div className="flex flex-grow justify-end ml-1">
                        <EditIcon fontSize='small' />
                      </div>
                    </button>
                  </Tooltip>

                  <div className={`p-1 m-2`}>
                    <p className="text-left text-white">Access: <span className="text-white">{GetModelAccess(attribute)}</span></p>
                    <p className="text-left text-white">Static: <span className="text-white">{GetModelStatic(attribute) ? "Yes" : "No"}</span></p>
                    <p className="text-left text-white">Final: <span className="text-white">{GetModelFinal(attribute) ? "Yes" : "No"}</span></p>
                    <p className="text-left text-white">Value: <span className="text-white">{attribute.value}</span></p>
                    <p className="text-left text-white">Type: <span className="text-white">{attribute.type}</span></p>
                  </div>
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
                <div key={index} className={` border-white border-2 font-bold p-1 rounded-xl ${getMemberTypeColor(method.return)} rounded m-2`}>

                  <Tooltip title="Edit in IDE">
                    <button className="p-2 w-[100%] flex-grow flex-row items-center flex border-2 border-white rounded-xl bg-black bg-opacity-20 hover:bg-opacity-50 text-l text-white font-bold"
                      onClick={() => os.execCommand('code -g "' + data.filePath + '":' + method.line)}>
                      {getAccessTypeIcon(GetModelAccess(method))}&nbsp; 
                      {method.name}
                      <div className="flex flex-grow justify-end ml-1">
                        <EditIcon fontSize='small' />
                      </div>
                    </button>
                  </Tooltip>

                  <div className={`mt-2`}>
                    <div className={`ml-2`}>
                      <p className="text-left text-white">Access: <span className="text-white">{GetModelAccess(method)}</span></p>
                      <p className="text-left text-white">Static: <span className="text-white">{GetModelStatic(method) ? "Yes" : "No"}</span></p>
                      <p className="text-left text-white">Final: <span className="text-white">{GetModelFinal(method) ? "Yes" : "No"}</span></p>
                      <p className="text-left text-white">Return: <span className="text-white">{method.return}</span></p>
                    </div>
                    <div className=" border-2 border-white rounded-xl bg-purple-900 mt-2 items-center p-2">
                      <span>Parameters</span>

                      {method.parameters.map((param, paramIndex) => (

                        <div className={`bg-purple-800 rounded-l rounded-r pl-2 pr-2 mt-2`}>
                          <p key={paramIndex} className="text-left text-white">
                            Name: <span className="text-white">{param.name}</span>
                          </p>
                          <p key={paramIndex} className="text-left text-white">
                            Type: <span className="text-white">{param.type}</span>
                          </p>
                        </div>
                      ))}
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