import React from 'react';
import './SidebarTab.css';

const SidebarTab = ({ sidetabs, handleFocusClass }) => {
    return (
        <div className="">
            {sidetabs.length > 0 ? (
                <div className="sidebar-tab">
                    <div>
                        <h1 className="title">Classes:</h1>
                        <ul className=''>
                            {sidetabs.map((classData, index) => (
                                <button key={index} className="class-button" onClick={() => handleFocusClass.current.focusOnNode(index)}>
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
