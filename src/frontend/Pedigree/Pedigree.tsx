import React, {
  useCallback,
  useRef,
  useState,
  useMemo,
  useContext,
} from "react";
import ReactFlow, {
  Background,
  NodeToolbar,
  BackgroundVariant,
  ReactFlowProvider,
  Node,
} from "reactflow";

import "reactflow/dist/style.css";
import { DragNDrop } from "./DragNDrop";
import { Marriage } from "./Nodes/Marriage";
import PedigreeContext from "./Context/PedigreeContext";

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function Pedigree() {
  const reactFlowWrapper = useRef<any>(null);
  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange, onConnect } =
    useContext(PedigreeContext);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const nodeTypes = useMemo(() => ({ marriage: Marriage }), []);



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

      setNodes((nds: Node[]) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Don't think I need ReactFlowProvider */}
      <ReactFlowProvider>
        <div
          className="reactflow-wrapper"
          ref={reactFlowWrapper}
          style={{ width: "100vw", height: "50vh" }}
        >
          <ReactFlow
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onNodeClick={(event, node) => console.log(event, node)}
            onInit={setReactFlowInstance}
            zoomOnScroll={false}
            fitView
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
