import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  NodeToolbar,
  BackgroundVariant,
  Position,
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "shamu",
    position: { x: 0, y: 0 },
    data: { label: "Shamu" },
    sourcePosition: Position.Right,
    sourceHandles: [{ id: "shamu-handle-1", position: "right" }],
  },
  {
    id: "shamusWife",
    position: { x: 300, y: 0 },
    data: { label: "Shamu's Wife" },
    targetPosition: Position.Left,
    targetHandles: [{ id: "shamusWife-handle-4", position: "left" }],
  },
  {
    id: "shamusDaughter",
    position: { x: 0, y: 100 },
    data: { label: "Shamu's daughter" },
  },
];
const initialEdges = [
  {
    id: "e1",
    source: "shamu",
    target: "shamusWife",
    type: "step",
    sourceHandle: "shamu-handle-1",
    targetHandle: "shamusWife-handle-4",
  },
  { id: "e2", source: "e1", target: "shamusDaughter", type: "step" },
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        zoomOnScroll={false}
        onNodeClick={(event, node) => console.log(event, node)}
      >
        <NodeToolbar />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
