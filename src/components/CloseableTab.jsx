import { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import React from 'react';
import { fitView } from 'reactflow';
import { Tab } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
import BoltIcon from '@mui/icons-material/Bolt';
import FlagIcon from '@mui/icons-material/Flag';
import Tooltip from '@mui/material/Tooltip';
import ClassIcon from '@mui/icons-material/Class';
import CategoryIcon from '@mui/icons-material/Category';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import './ClassNode.css';
import dagre from 'dagre';
import ClassInspector from './ClassInspector';
import ClassNode from './ClassNode';
import ScrollableTabs from './ScrollableTabs';
import CodeEditorTab from './CodeEditorTab';
import ReactFlow, { Controls, useNodesState, useEdgesState, MarkerType, useReactFlow, Background, BackgroundVariant } from 'reactflow';
import '../pages/Welcome.css';



// Node types
const nodeTypes = {
    classNode: ClassNode
};

// Specifically for the auto layout feature
const nodeWidth = 400;
const nodeHeight = 800;

// Demo Tab Content Component
const DemoTabContent = React.forwardRef(({ demoData, createClassInspectorTab }, ref) => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    
    // Expose focus method to parent
    useImperativeHandle(ref, () => ({
        focusOnNode(nodeId) {
            if (reactFlowInstance && nodes[nodeId]) {
                reactFlowInstance.fitView({
                    nodes: [nodes[nodeId]],
                    duration: 800
                });
            }
        }
    }));
    
    useEffect(() => {
        if (demoData && demoData.length > 0) {
            // Get edge color from CSS variable
            const edgeColor = getComputedStyle(document.documentElement).getPropertyValue('--edge-color').trim() || '#FFFFFF';
            
            // Create onClick handler
            const onClick = (event) => {
                let classIndex = Number(event.target.value);
                let classObject = demoData[classIndex];
                if (classObject !== undefined && createClassInspectorTab) {
                    createClassInspectorTab(classObject, true); // Keep demo tab selected
                }
            };
            
            // Create nodes from demo data
            const demoNodes = demoData.map((cl, i) => ({
                name: cl.name,
                id: (i + 1).toString(),
                type: 'classNode',
                position: { x: i * 200, y: 0 },
                data: {
                    onClick: onClick,
                    classData: cl,
                    classIndex: i,
                }
            }));
            
            // Create edges
            const demoEdges = [];
            let edgeCounter = 0;
            for (let i = 0; i < demoData.length; i++) {
                for (let j = 0; j < demoData.length; j++) {
                    if (demoData[j].name === demoData[i].extends) {
                        demoEdges.push({
                            type: 'step',
                            source: (j + 1).toString(),
                            target: (i + 1).toString(),
                            id: `extends-${i}-${j}-${edgeCounter++}`,
                            animated: true,
                            markerStart: {
                                type: MarkerType.Arrow,
                                width: 20,
                                height: 20,
                                color: edgeColor,
                            },
                            style: { strokeWidth: 5, stroke: edgeColor },
                        });
                    }
                    if (demoData[i].implements.includes(demoData[j].name)) {
                        demoEdges.push({
                            type: 'step',
                            source: (j + 1).toString(),
                            target: (i + 1).toString(),
                            id: `implements-${i}-${j}-${edgeCounter++}`,
                            animated: true,
                            markerStart: {
                                type: MarkerType.ArrowClosed,
                                width: 20,
                                height: 20,
                                color: edgeColor,
                            },
                            style: { strokeWidth: 5, stroke: edgeColor },
                        });
                    }
                }
            }
            
            const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(demoNodes, demoEdges, 'TB');
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
            
            // Auto-fit view after layout
            setTimeout(() => {
                if (reactFlowInstance) {
                    reactFlowInstance.fitView({ duration: 800 });
                }
            }, 100);
        }
    }, [demoData, reactFlowInstance]);
    
    const onLayout = useCallback(() => {
        if (nodes.length > 0 && reactFlowInstance) {
            reactFlowInstance.fitView({ duration: 800 });
        }
    }, [nodes, reactFlowInstance]);
    
    return (
        <div className="w-[100%] h-[100%] rounded-2xl" id="demo-react-flow-container" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                proOptions={{ hideAttribution: true }}
                nodeTypes={nodeTypes}
                onInit={setReactFlowInstance}
                minZoom={0.1}
            >
                <Controls />
            </ReactFlow>
            
            <div className="relative bottom-20">
                <button 
                    className="absolute right-10 px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                    onClick={() => onLayout()}
                    style={{ 
                        background: 'linear-gradient(to right, var(--border-primary), var(--border-secondary))',
                        color: 'var(--text-primary)',
                        border: '2px solid var(--border-primary)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(to right, var(--accent), var(--accent-hover))';
                        e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'linear-gradient(to right, var(--border-primary), var(--border-secondary))';
                        e.target.style.color = 'var(--text-primary)';
                    }}
                >
                    LAYOUT
                </button>
            </div>
        </div>
    );
});

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

/**
 * Takes in nodes and edges and lays them out based on their connections
 * https://reactflow.dev/examples/layout/dagre
 */
const getLayoutedElements = (nodes, edges, direction = 'TB') => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });
    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });
    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });
    dagre.layout(dagreGraph);
    nodes.forEach((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        node.targetPosition = isHorizontal ? 'left' : 'top';
        node.sourcePosition = isHorizontal ? 'right' : 'bottom';
        node.position = {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - nodeHeight / 2,
        };
        return node;
    });

    return { nodes, edges };
};


const CloseableTab = ({ classData, focusRef, onDemoTabRequest, onSidebarDataChange, onClassInspectorRequest }) => {

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [layoutStuff, setLayoutStuff] = useState(false);
    const [selectedTab, setSelectedTab] = useState('1');
    const [tabs, setTabs] = useState([]);
    const [panels, setPanels] = useState([]);
    const [openTabsCount, setOpenTabsCount] = useState(1); // Start at 1 since main tab is "1"
    const [hasDemoTab, setHasDemoTab] = useState(false);
    const [demoData, setDemoData] = useState(null);
    const [codeEditorData, setCodeEditorData] = useState(null);
    const [hasCodeEditorTab, setHasCodeEditorTab] = useState(false);
    const demoFocusRef = useRef(null);
    
    // Update sidebar when tab changes
    useEffect(() => {
        if (onSidebarDataChange) {
            if (selectedTab === 'demo' && demoData) {
                onSidebarDataChange(demoData);
            } else if (selectedTab === '1') {
                onSidebarDataChange(classData);
            }
        }
    }, [selectedTab, demoData, classData, onSidebarDataChange]);

    //fix focus
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [reactFlowState, setReactFlowState] = useState({
        width: 0,
        height: 0,
        zoom: 1,
    });

    useImperativeHandle(focusRef, () => ({
        focusOnNode(nodeId) {
            // Check which tab is active and focus accordingly
            if (selectedTab === 'demo' && demoFocusRef.current) {
                demoFocusRef.current.focusOnNode(nodeId);
            } else if (reactFlowInstance && nodes[nodeId]) {
                reactFlowInstance.fitView({
                    nodes: [nodes[nodeId]],
                    duration: 800
                });
            }
        }
    }));

    // Keep track of viewport size
    useEffect(() => {
        if (reactFlowInstance) {
            const { width, height, zoom } = reactFlowInstance.getViewport();
            setReactFlowState({ width, height, zoom });
        }
    }, [reactFlowInstance]);

    const prevClassDataIdRef = useRef();
    useEffect(() => {
        prevClassDataIdRef.current = classData;
    });
    const prevClassDataId = prevClassDataIdRef.current;

    const onLayout = useCallback(
        (direction) => {
            const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
                nodes,
                edges,
                direction
            );
            setNodes([...layoutedNodes]);
            setEdges([...layoutedEdges]);
            if (reactFlowInstance) {
                reactFlowInstance.fitView({
                    nodes: nodes,
                    duration: 800
                  });
            }
        },
        [nodes, edges]
    );

    // Handle changing a tab
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    // Keyboard shortcuts for tab navigation (Ctrl+Left, Ctrl+Right)
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ctrl+Left or Ctrl+Right
            if (e.ctrlKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
                e.preventDefault();
                
                // Get all tab values in order
                const allTabs = ['1']; // Main tab
                if (hasDemoTab) allTabs.push('demo');
                tabs.forEach(tab => allTabs.push(tab.value));
                
                const currentIndex = allTabs.indexOf(selectedTab);
                
                if (e.key === 'ArrowLeft') {
                    // Ctrl+Left - go to previous tab
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : allTabs.length - 1;
                    setSelectedTab(allTabs[prevIndex]);
                } else if (e.key === 'ArrowRight') {
                    // Ctrl+Right - go to next tab
                    const nextIndex = currentIndex < allTabs.length - 1 ? currentIndex + 1 : 0;
                    setSelectedTab(allTabs[nextIndex]);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedTab, tabs, hasDemoTab]);

    // Handle closing a tab
    const handleClose = (value) => {
        if (value === 'demo') {
            setHasDemoTab(false);
            setSelectedTab('1');
        } else if (value === 'code-editor') {
            setHasCodeEditorTab(false);
            setCodeEditorData(null);
            setTabs(prevTabs => prevTabs.filter(t => t.value !== 'code-editor'));
            setSelectedTab('1');
        } else {
            // For class inspector tabs, remove them
            const tabArr = tabs.filter(t => t.value !== value);
            setTabs(tabArr);
            const panelArr = panels.filter(p => p.value !== value);
            setPanels(panelArr);
            setOpenTabsCount(openTabsCount - 1);
            setSelectedTab('1');
        }
    }

    // Creates or updates the code editor tab
    const createCodeEditorTab = useCallback((fileData) => {
        setCodeEditorData(fileData);
        
        if (!hasCodeEditorTab) {
            setTabs(prevTabs => {
                // Check if code-editor tab already exists
                const exists = prevTabs.some(tab => tab.value === 'code-editor');
                if (exists) return prevTabs;
                return [...prevTabs, { value: 'code-editor', label: 'Code Editor', closeable: true }];
            });
            setHasCodeEditorTab(true);
        }
        
        // Switch to code editor tab
        setSelectedTab('code-editor');
    }, [hasCodeEditorTab]);

    // Creates a new class inspector tab (MOVED BEFORE createOrOpenDemoTab)
    const createClassInspectorTab = useCallback((data, keepCurrentTab = false) => {
        setOpenTabsCount(prevCount => {
            const newTabValue = `${prevCount + 1}`;
            
            setTabs(prevTabs => [...prevTabs, { value: newTabValue, label: data.name, closeable: true }]);
            setPanels(prevPanels => [...prevPanels, { value: newTabValue, content: <ClassInspector data={data} createCodeEditorTab={createCodeEditorTab} /> }]);
            
            if (!keepCurrentTab) {
                setSelectedTab(newTabValue);
            }
            
            return prevCount + 1;
        });
    }, [createCodeEditorTab]);
    
    // Create or switch to demo tab
    const createOrOpenDemoTab = useCallback((demoClasses) => {
        setDemoData(demoClasses);
        setHasDemoTab(true);
        setSelectedTab('demo');
    }, []);
    
    // Register the callbacks with parent component
    useEffect(() => {
        if (onDemoTabRequest) {
            onDemoTabRequest(() => createOrOpenDemoTab);
        }
        if (onClassInspectorRequest) {
            onClassInspectorRequest(() => createClassInspectorTab);
        }
    }, [onDemoTabRequest, createOrOpenDemoTab, onClassInspectorRequest, createClassInspectorTab]);


    // Automatically select main tab if there's only one tab
    useEffect(() => {
        if (openTabsCount === 1) {
            setSelectedTab('1');
        }
    }, [openTabsCount]);

    // Layout the nodes when layoutStuff is triggered
    useEffect(() => {
        onLayout('TB');
        setLayoutStuff(false);
    }, [layoutStuff]);

    // Create nodes and connections from the class data whenever it is changed
    useEffect(() => {
        // Get edge color from CSS variable
        const edgeColor = getComputedStyle(document.documentElement).getPropertyValue('--edge-color').trim() || '#FFFFFF';
        
        const onClick = (event) => {
            let classIndex = Number(event.target.value);
            let classObject = classData[classIndex];
            if (classObject !== undefined) createClassInspectorTab(classObject);
        }
        if (classData !== prevClassDataId) {
            setNodes((nds) =>
                classData.map((cl, i) => {
                    let node = {
                        name: classData[i].name,
                        id: (i + 1).toString(),
                        type: 'classNode',
                        position: {
                            x: (i * 200),
                            y: 0
                        },
                        data: {
                            onClick: onClick,
                            classData: cl,
                            classIndex: i,
                        }
                    }
                    return node;
                })
            );
            setEdges((edg) => {
                let retval = [];
                let edgeCounter = 0;
                for (let i = 0; i < classData.length; i++) {
                    for (let j = 0; j < classData.length; j++) {
                        if (classData[j].name === classData[i].extends) {
                            let edge = {
                                type: 'step',
                                source: (j + 1).toString(),
                                target: (i + 1).toString(),
                                id: `extends-${i}-${j}-${edgeCounter++}`,
                                animated: true,
                                markerStart: {
                                    type: MarkerType.Arrow,
                                    width: 20,
                                    height: 20,
                                    color: edgeColor,
                                },
                                style: {
                                    strokeWidth: 5,
                                    stroke: edgeColor,
                                },
                            };
                            retval.push(edge);
                        }
                        if (classData[i].implements.includes(classData[j].name)) {
                            let edge = {
                                type: 'step',
                                source: (j + 1).toString(),
                                target: (i + 1).toString(),
                                id: `implements-${i}-${j}-${edgeCounter++}`,
                                animated: true,
                                markerStart: {
                                    type: MarkerType.ArrowClosed,
                                    width: 20,
                                    height: 20,
                                    color: edgeColor,
                                },
                                style: {
                                    strokeWidth: 5,
                                    stroke: edgeColor,
                                },
                            };
                            retval.push(edge);
                        }
                    }
                }
                setLayoutStuff(!layoutStuff);
                return retval;
            });
        } else {
            nodes.forEach((nde) => {
                nde.data.onClick = onClick;
            })
        }
    },
        [classData, setNodes, createClassInspectorTab]);

    return (
        <div className="flex flex-col flex-grow w-[100%] h-[100%]">
            <TabContext value={selectedTab}>
                <div className="flex justify-start items-center">
                    <ScrollableTabs onChange={handleChange} aria-label="lab API tabs example" className="items-center flex rounded-lg h-[50px] mt-3 mx-6" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                        <Tab 
                            label="Main Tab" 
                            value="1" 
                            className="flex text-center rounded-l-lg mx-1" 
                            style={{ 
                                color: 'var(--text-primary)', 
                                backgroundColor: selectedTab === '1' ? 'var(--accent)' : 'var(--border-primary)' 
                            }} 
                        />
                        {hasDemoTab && (
                            <Tab
                                icon={<CloseIcon className="hover:bg-red-700 rounded-full" onClick={() => handleClose('demo')} />}
                                iconPosition="end"
                                className="mb-1 rounded-2xl"
                                style={{ 
                                    color: 'var(--text-primary)', 
                                    backgroundColor: selectedTab === 'demo' ? 'var(--accent)' : 'var(--border-primary)' 
                                }}
                                label="🚀 Demo"
                                value="demo"
                            />
                        )}
                        {tabs.map((tab) => (
                            <Tab
                                icon={<CloseIcon className="hover:bg-red-700 rounded-full" onClick={() => handleClose(tab.value)} />}
                                iconPosition="end"
                                className="mb-1 rounded-2xl"
                                style={{ 
                                    color: 'var(--text-primary)', 
                                    backgroundColor: selectedTab === tab.value ? 'var(--accent)' : 'var(--border-primary)' 
                                }}
                                key={tab.value} label={tab.label} value={tab.value} />
                        ))}
                    </ScrollableTabs>
                </div>
                <TabPanel value="1" sx={{ width: "100%", height: "100%", display: selectedTab === '1' ? 'block' : 'none' }} >
                    <div className="w-[100%] h-[100%] rounded-2xl relative" id="react-flow-graph-container" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}> {/* edit the graph (gray box with the icons) size */}
                        {/* Empty state with crow quote */}
                        {(!classData || classData.length === 0) && (
                            <div 
                                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                                style={{ zIndex: 1000 }}
                            >
                                <div 
                                    className="text-center p-8 rounded-2xl pointer-events-auto shadow-2xl" 
                                    style={{ 
                                        backgroundColor: 'var(--bg-primary)', 
                                        border: '2px solid var(--border-primary)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    <div className="mb-4 flex justify-center space-x-4">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-800 shadow-lg">
                                            <ClassIcon fontSize="large" style={{ color: 'white' }} />
                                        </div>
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-700 shadow-lg">
                                            <CategoryIcon fontSize="large" style={{ color: 'white' }} />
                                        </div>
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-lg">
                                            <AccountTreeIcon fontSize="large" style={{ color: 'white' }} />
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 empty-state-title" style={{ color: 'var(--text-primary)', fontFamily: "'Orbitron', sans-serif" }}>
                                         Raven's Nest is Empty
                                    </h2>
                                    <p className="text-lg mb-2 empty-state-quote" style={{ color: 'var(--text-secondary)', fontFamily: "'Orbitron', sans-serif" }}>
                                        "A wise raven never codes alone - import your Java classes!"
                                    </p>
                                    <p className="text-sm italic empty-state-instruction" style={{ color: 'var(--text-secondary)', fontFamily: "'Orbitron', sans-serif" }}>
                                        Click "Open Project" or "🚀 Try Demo" to start exploring your code structure
                                    </p>
                                </div>
                            </div>
                        )}
                        
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            proOptions={{ hideAttribution: true }}
                            nodeTypes={nodeTypes}
                            onInit={setReactFlowInstance}
                            minZoom={0.1}
                        >
                            <Controls />
                        </ReactFlow>
                        
                        <div className="relative bottom-20">
                            <button 
                                className="absolute right-10 px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                                onClick={() => onLayout('TB')}
                                style={{ 
                                    background: 'linear-gradient(to right, var(--border-primary), var(--border-secondary))',
                                    color: 'var(--text-primary)',
                                    border: '2px solid var(--border-primary)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'linear-gradient(to right, var(--accent), var(--accent-hover))';
                                    e.target.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'linear-gradient(to right, var(--border-primary), var(--border-secondary))';
                                    e.target.style.color = 'var(--text-primary)';
                                }}
                            >
                                LAYOUT
                            </button>
                        </div>
                    </div>
                </TabPanel>
                {hasDemoTab && (
                    <TabPanel value="demo" sx={{ width: "100%", height: "100%", display: selectedTab === 'demo' ? 'block' : 'none' }}>
                        <DemoTabContent ref={demoFocusRef} demoData={demoData} createClassInspectorTab={createClassInspectorTab} />
                    </TabPanel>
                )}
                {hasCodeEditorTab && (
                    <TabPanel value="code-editor" sx={{ width: "100%", height: "100%", display: selectedTab === 'code-editor' ? 'block' : 'none' }}>
                        <CodeEditorTab fileData={codeEditorData} />
                    </TabPanel>
                )}
                {panels.map((panel) => (
                    <TabPanel key={panel.value} value={panel.value} sx={{ width: "100%", height: "100%", padding: 0, display: selectedTab === panel.value ? 'block' : 'none' }}>
                        {panel.content}
                    </TabPanel>
                ))}
            </TabContext>
        </div>
    );
};

export default CloseableTab;