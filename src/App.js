import React, { useState } from 'react';

import {Phone,Bell,CornerUpRight,PhoneOff} from "react-feather";

import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';

import ButtonEdge from './ButtonEdge';
import Relation from "./relation";

import "./App.css";

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const onNodeMouseEnter = (event, node) => console.log('mouse enter:', node);
const onNodeMouseMove = (event, node) => console.log('mouse move:', node);
const onNodeMouseLeave = (event, node) => console.log('mouse leave:', node);
const onNodeContextMenu = (event, node) => {
  event.preventDefault();
  console.log('context menu:', node);
};

const edgeTypes = {
  buttonedge: ButtonEdge,
};

const initialElements = [
  {
    id: 'horizontal-1',
    sourcePosition: 'right',
    targetPosition: 'right',
    // type: 'input',
    className: "circle1",
    data: { label: <Phone /> },
    position: { x: -100,y: 0 },
  },
  {
    id: 'horizontal-2',
    sourcePosition: 'right',
    targetPosition: 'left',
    className:"square",
    data: { label: <Relation /> },
    position: { x: 0, y: -25 },
  },
  {
    id: 'horizontal-3',
    sourcePosition: 'right',
    targetPosition: 'left',
    className: "circle1",
    data: { label: "0" },
    position: { x: 220,y: 0 },
  },
  {
    id: 'horizontal-4',
    sourcePosition: 'right',
    targetPosition: 'left',
    className:"square",
    data: { label: <Relation /> },
    position: { x: 300,y: -25 },
  },
  {
    id: 'horizontal-5',
    sourcePosition: 'right',
    targetPosition: 'left',
    className: "circle1",
    data: { label: <><span style={{fontSize:"16px"}}>4</span><Bell /></> },
    position: { x: 520,y: 0 },
  },
  {
    id: 'horizontal-6',
    sourcePosition: 'right',
    targetPosition: 'left',
    className:"square",
    data: { label: <Relation /> },
    position: { x: 620,y: -25 },
  },
  {
    id: 'horizontal-7',
    sourcePosition: 'right',
    targetPosition: 'left',
    className: "circle1",
    data: { label: <PhoneOff /> },
    position: { x: 840,y: 0 },
  },
  {
    id: 'horizontal-3-1',
    sourcePosition: 'right',
    targetPosition: 'top',
    className: "circle1",
    data: { label: '1' },
    position: { x: 220, y: 125 },
  },{
    id: 'horizontal-3-1-1',
    sourcePosition: 'right',
    targetPosition: 'left',
    className:"square",
    data: { label: <Relation /> },
    position: { x: 300, y: 100 },
  },{
    id: 'horizontal-3-1-2',
    sourcePosition: 'right',
    targetPosition: 'left',
    className: "circle1",
    data: { label: <><span style={{fontSize:"16px"}}>4</span><Bell /></> },
    position: { x: 520, y: 125 },
  },{
    id: 'horizontal-3-1-3',
    sourcePosition: 'right',
    targetPosition: 'left',
    className:"square",
    data: { label: <Relation /> },
    position: { x: 620, y: 100 },
  },{
    id: 'horizontal-3-1-4',
    sourcePosition: 'right',
    targetPosition: 'left',
    className: "circle1",
    data: { label: <CornerUpRight /> },
    position: { x: 840, y: 125 },
  },
  {
    id: 'horizontal-3-2',
    sourcePosition: 'right',
    targetPosition: 'top',
    className: "circle1",
    data: { label: '2' },
    position: { x: 220, y: 250 },
  },{
    id: 'horizontal-3-2-1',
    sourcePosition: 'right',
    targetPosition: 'left',
    className:"square",
    data: { label: <Relation /> },
    position: { x: 300, y: 225 },
  },{
    id: 'horizontal-3-2-2',
    sourcePosition: 'right',
    targetPosition: 'left',
    className: "circle1",
    data: { label: <><span style={{fontSize:"16px"}}>4</span><Bell /></> },
    position: { x: 520, y: 250 },
  },{
    id: 'horizontal-3-2-3',
    sourcePosition: 'right',
    targetPosition: 'left',
    className:"square",
    data: { label: <Relation /> },
    position: { x: 620, y: 225 },
  },{
    id: 'horizontal-3-2-4',
    sourcePosition: 'right',
    targetPosition: 'left',
    className: "circle1",
    data: { label: <PhoneOff /> },
    position: { x: 840, y: 250 },
  },
  {
    id: 'horizontal-3-3',
    sourcePosition: 'right',
    targetPosition: 'top',
    className: "circle1",
    data: { label: '3' },
    position: { x: 220, y: 375 },
  },
  {
    id: 'horizontal-3-3-1',
    sourcePosition: 'right',
    targetPosition: 'left',
    className:"square",
    data: { label: <Relation /> },
    position: { x: 300, y: 350 },
  },
  {
    id: 'horizontal-3-3-2',
    sourcePosition: 'right',
    targetPosition: 'left',
    className: "circle1",
    data: { label: <PhoneOff /> },
    position: { x: 520, y: 375 },
  },
  {
    id: 'horizontal-3-4',
    sourcePosition: 'right',
    targetPosition: 'top',
    className: "circle1",
    data: { label: '4' },
    position: { x: 220, y: 500 },
  },{
    id: 'horizontal-3-4-1',
    sourcePosition: 'right',
    targetPosition: 'left',
    className:"square",
    data: { label: <Relation /> },
    position: { x: 300, y: 475 },
  },
  {
    id: 'horizontal-3-4-2',
    sourcePosition: 'right',
    targetPosition: 'left',
    className: "circle1",
    data: { label: <PhoneOff /> },
    position: { x: 520, y: 500 },
  },
  {
    id: 'horizontal-e1-2',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-2',
    
  },
  {
    id: 'horizontal-e1-4',
    source: 'horizontal-2',
    type: 'smoothstep',
    target: 'horizontal-3',
  },
  {
    id: 'horizontal-e3-4',
    source: 'horizontal-4',
    type: 'smoothstep',
    target: 'horizontal-3',
    
  },
  {
    id: 'horizontal-e4-5',
    source: 'horizontal-4',
    type: 'smoothstep',
    target: 'horizontal-5',
    
  },
  {
    id: 'horizontal-e5-6',
    source: 'horizontal-5',
    type: 'smoothstep',
    target: 'horizontal-6',
    
  },
  {
    id: 'horizontal-e6-7',
    source: 'horizontal-6',
    type: 'smoothstep',
    target: 'horizontal-7',
    
  },
  
  {
    id: 'horizontal-e6-8',
    source: 'horizontal-6',
    type: 'smoothstep',
    target: 'horizontal-8',
    
  },
  {
    id: 'horizontal-e3-3-1',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-3-1',
    
  },{
    id: 'horizontal-e3-1-3-2',
    source: 'horizontal-3-1',
    type: 'smoothstep',
    target: 'horizontal-3-2',
    
  },{
    id: 'horizontal-e3-2-3-3',
    source: 'horizontal-3-2',
    type: 'smoothstep',
    target: 'horizontal-3-3',
    
  },{
    id: 'horizontal-e3-1-3-1-1',
    source: 'horizontal-3-1',
    type: 'smoothstep',
    target: 'horizontal-3-1-1',
  },{
    id: 'horizontal-e3-1-1-3-1-2',
    source: 'horizontal-3-1-1',
    type: 'smoothstep',
    target: 'horizontal-3-1-2',
    
  },{
    id: 'horizontal-e3-1-2-3-1-3',
    source: 'horizontal-3-1-2',
    type: 'smoothstep',
    target: 'horizontal-3-1-3',
    
  },{
    id: 'horizontal-e3-1-3-3-1-4',
    source: 'horizontal-3-1-3',
    type: 'smoothstep',
    target: 'horizontal-3-1-4',
    
  },

  {
    id: 'horizontal-e3-2-3-2-1',
    source: 'horizontal-3-2',
    type: 'smoothstep',
    target: 'horizontal-3-2-1',
    
  },{
    id: 'horizontal-e3-2-1-3-2-2',
    source: 'horizontal-3-2-1',
    type: 'smoothstep',
    target: 'horizontal-3-2-2',
    
  },{
    id: 'horizontal-e3-2-2-3-2-3',
    source: 'horizontal-3-2-2',
    type: 'smoothstep',
    target: 'horizontal-3-2-3',
    
  },{
    id: 'horizontal-e3-2-3-3-2-4',
    source: 'horizontal-3-2-3',
    type: 'smoothstep',
    target: 'horizontal-3-2-4',
    
  },

  {
    id: 'horizontal-e3-3-3-3-1',
    source: 'horizontal-3-3',
    type: 'smoothstep',
    target: 'horizontal-3-3-1',
    
  },{
    id: 'horizontal-e3-3-1-3-3-2',
    source: 'horizontal-3-3-1',
    type: 'smoothstep',
    target: 'horizontal-3-3-2',
    
  },

  {
    id: 'horizontal-e3-3-3-4',
    source: 'horizontal-3-3',
    type: 'smoothstep',
    target: 'horizontal-3-4',
  },{
    id: 'horizontal-e3-4-3-4-1',
    source: 'horizontal-3-4',
    type: 'smoothstep',
    target: 'horizontal-3-4-1',
    
  },{
    id: 'horizontal-e3-4-1-3-4-2',
    source: 'horizontal-3-4-1',
    type: 'smoothstep',
    target: 'horizontal-3-4-2',
    
  },
  
];

const App = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <ReactFlow
      elements={elements}
      height={"100vh"}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      selectNodesOnDrag={true}
      onNodeMouseEnter={onNodeMouseEnter}
      onNodeMouseMove={onNodeMouseMove}
      onNodeMouseLeave={onNodeMouseLeave}
      onNodeContextMenu={onNodeContextMenu}
      edgeTypes={edgeTypes}
      onElementClick={(event,el) => console.log(el)}
      nodesDraggable={false}
      nodesConnectable={false}
    />
  );
};

export default App;