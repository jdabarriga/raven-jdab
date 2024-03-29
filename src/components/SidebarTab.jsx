/*import React from 'react';
import './SidebarTab.css';


const SidebarTab = ({ sidetabs, handleFocusClass }) => {
    return (
        <div className="sidebar-tab">
            {sidetabs.length > 0 ? (
                <div>
                    <h1 className="title">Class Names:</h1>
                    </div>
            ) : (
                <h1 className="title-red">Class Names Not Available</h1>
            )}
            <ul className=''>
                {sidetabs?.map((classData, index) => (
                    <button key={index} className="class-button" onClick={() => handleFocusClass.current.focusOnNode(index)}>
                        {classData.name}
                    </button>
                ))}
            </ul>
        </div>
    );
};

export default SidebarTab;
*/
import React from 'react';
import './SidebarTab.css';

const SidebarTab = ({ sidetabs, handleFocusClass }) => {
    return (
        <div className="">
            {sidetabs.length > 0 ? (
                <div className="sidebar-tab">
                    <div>
                        <h1 className="title">Class Names:</h1>
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
                <div>
                    <h1 className="title-red">Class Names Not Available</h1>
                </div>
            )}
        </div>
    );
};

export default SidebarTab;
