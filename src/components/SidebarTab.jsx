import React, { useState, useEffect } from 'react';
import { GetModelAbstract } from '../structures/classModels';

const SidebarTab = ({ sidetabs, handleFocusClass, createClassInspectorTab }) => {
    const [focusedIndex, setFocusedIndex] = useState(null);

    // Global Ctrl key listener
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Control' && focusedIndex !== null && createClassInspectorTab) {
                createClassInspectorTab(sidetabs[focusedIndex]);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [focusedIndex, sidetabs, createClassInspectorTab]);

    function getClassColor(abstract, interFace) {
        if (interFace) {
          return "bg-gradient-to-br from-yellow-500 to-yellow-700"; // Interface - yellow to darker yellow
        } else if (abstract) {
          return "bg-gradient-to-br from-red-500 to-orange-700"; // Abstract - red to darker orange
        }
        else{
          return "bg-gradient-to-br from-blue-500 to-blue-800"; // Normal - blue to darker blue
        }
      }

    return (
        <div className="">
            {sidetabs.length > 0 ? (
                <div 
                    className="p-2 rounded-2xl max-h-[calc(100vh-200px)] overflow-y-auto overflow-x-hidden"
                    style={{ 
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-primary)',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#555 transparent'
                    }}
                >
                    <div>
                        <h1 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Classes:</h1>
                        <ul className='space-y-1.5'>
                            {sidetabs.map((classData, index) => (
                                <button 
                                    key={index} 
                                    className={`block w-full text-white font-bold py-2 px-3 rounded-xl cursor-pointer text-center whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-200 hover:scale-105 hover:shadow-lg ${getClassColor(GetModelAbstract(classData), classData.interface)} ${focusedIndex === index ? 'ring-2 ring-white' : ''}`}
                                    onClick={() => {
                                        handleFocusClass.current.focusOnNode(index);
                                        setFocusedIndex(index);
                                    }}
                                    onFocus={() => setFocusedIndex(index)}
                                    onBlur={() => setFocusedIndex(null)}
                                    tabIndex={0}
                                    title="Click to focus in graph, then press Ctrl to open in new tab"
                                >
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
