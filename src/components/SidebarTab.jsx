import React from 'react';
import './SidebarTab.css';
import { GetModelAbstract } from '../structures/classModels';

const SidebarTab = ({ sidetabs, handleFocusClass }) => {

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

    return (
        <div className="">
            {sidetabs.length > 0 ? (
                <div className="sidebar-tab">
                    <div>
                        <h1 className="title">Classes:</h1>
                        <ul className=''>
                            {sidetabs.map((classData, index) => (
                                <button key={index} className={'class-button ' + getClassColor(GetModelAbstract(classData), classData.interface)} onClick={() => handleFocusClass.current.focusOnNode(index)}>
                                    {classData.name}
                                </button>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default SidebarTab;
