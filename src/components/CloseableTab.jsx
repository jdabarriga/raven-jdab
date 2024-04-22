import { useState, useEffect, useRef, useImperativeHandle } from "react";
import { fitView } from 'reactflow';
import { Tab } from '@mui/material';
import { TabList, TabContext, TabPanel } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
import React, { useCallback } from 'react';
import ClassNode from "./ClassNode";
import 'reactflow/dist/style.css';
import './ClassNode.css';
import dagre from 'dagre';
import ClassInspector from './ClassInspector';
import ReactFlow, { Controls, useNodesState, useEdgesState, MarkerType, useReactFlow, Background, BackgroundVariant } from 'reactflow';
import '../pages/Welcome.css';



// Node types
const nodeTypes = {
    classNode: ClassNode
};

// Specifically for the auto layout feature
const nodeWidth = 400;
const nodeHeight = 800;

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


const ClosableTab = ({ classData, focusRef }) => {

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [layoutStuff, setLayoutStuff] = useState(false);
    const [selectedTab, setSelectedTab] = useState('1');
    const [tabs, setTabs] = useState([]);
    const [panels, setPanels] = useState([]);
    const [openTabsCount, setOpenTabsCount] = useState(1); // Initial count with main tab

    //fix focus
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [reactFlowState, setReactFlowState] = useState({
        width: 0,
        height: 0,
        zoom: 1,
    });

    useImperativeHandle(focusRef, () => ({

        focusOnNode(nodeId) {
            if (reactFlowInstance) {
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
        },
        [nodes, edges]
    );

    // Handle changing a tab
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    // Handle closing a tab
    const handleClose = (value) => {
        const tabArr = tabs.filter(t => t.value !== value);
        setTabs(tabArr);
        const panelArr = panels.filter(p => p.value !== value);
        setPanels(panelArr);
        setOpenTabsCount(openTabsCount - 1); // Decrement count
        setSelectedTab('1');
    }

    // Creates a new class inspector tab
    const createClassInspectorTab = useCallback((data) => {
        const newTab = {
            value: `${openTabsCount + 1}`, // Incrementing count when new tab is created
            label: `${data.name}`
        };

        const getBackgroundColor = () => {
            if (data.interface) {
                return 'bg-[#B03A2E]'; // Interface 
            } else if (data.abstract) {
                return 'bg-[#7D3C98]'; // Abstract
            } else {
                return 'bg-[#148F77]'; // Normal
            }
        };

        setTabs([...tabs, newTab]);
        setPanels([
            ...panels,
            {
                value: `${openTabsCount + 1}`,
                child: () => <ClassInspector data={data} />
            }
        ]);
        setOpenTabsCount(openTabsCount + 1); // Increment count
        setSelectedTab(`${openTabsCount + 1}`); // Select the newly created tab
    }, [panels, tabs]);


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
                for (let i = 0; i < classData.length; i++) {
                    for (let j = 0; j < classData.length; j++) {
                        if (classData[j].name === classData[i].extends) {
                            let edge = {
                                type: 'step',
                                source: (j + 1).toString(),
                                target: (i + 1).toString(),
                                id: i.toString(),
                                animated: true,
                                markerStart: {
                                    type: MarkerType.Arrow,
                                    width: 20,
                                    height: 20,
                                    color: '#FFFFFF',
                                },
                                style: {
                                    strokeWidth: 5,
                                    stroke: '#FFFFFF',
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
                    <TabList onChange={handleChange} aria-label="lab API tabs example" className="items-center flex rounded-lg bg-gray-800 color-white h-[50px] mt-3 mx-6  "> {/* this line will edit the single tab on top size */}
                        <Tab label="Main Tab" value="1" className="flex text-center bg-black text-white rounded-l-lg mx-1" style={{ color: 'white' }} />
                        {tabs.map((tab) => (
                            <Tab
                                icon={<CloseIcon className="hover:bg-red-700 rounded-full" onClick={() => handleClose(tab.value)} />}
                                iconPosition="end"
                                className="bg-white hover:bg-gray-900 mb-1 rounded-2xl"
                                style={{ color: 'white' }}
                                key={tab.value} label={tab.label} value={tab.value} />
                        ))}
                    </TabList>
                </div>
                <TabPanel value="1" sx={{ witdh: "100%", height: "100%" }} >
                    <div className="w-[100%] h-[100%] bg-gray-800 text-white rounded-2xl" id="react-flow-graph-container"> {/* edit the graph (gray box with the icons) size */}
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
                        
                        <div className="relative bottom-20 border-white">
                            <button className="absolute right-10 border-white" onClick={() => onLayout('TB')}>LAYOUT</button>
                        </div>
                    </div>
                </TabPanel>
                {panels.map((panel) => (
                    <TabPanel key={panel.value} value={panel.value}>
                        {panel.child()}
                    </TabPanel>
                ))}
            </TabContext>
        </div>
    );
};

export default ClosableTab;