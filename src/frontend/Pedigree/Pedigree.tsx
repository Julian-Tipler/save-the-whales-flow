import React, { useCallback, useRef, useState } from "react";
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  NodeToolbar,
  BackgroundVariant,
  Position,
  ReactFlowProvider,
} from "reactflow";

import "reactflow/dist/style.css";
import { DragNDrop } from "./DragNDrop";

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

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function Pedigree() {
  const reactFlowWrapper = useRef<any>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlowProvider>
        <div
          className="reactflow-wrapper"
          ref={reactFlowWrapper}
          style={{ width: "100vw", height: "50vh" }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            zoomOnScroll={false}
            onNodeClick={(event, node) => console.log(event, node)}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onInit={setReactFlowInstance}
          >
            <NodeToolbar />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
        <DragNDrop />
      </ReactFlowProvider>
    </div>
  );
}
