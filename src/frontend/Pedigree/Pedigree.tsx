import React, {
  useCallback,
  useRef,
  useState,
  useMemo,
  useContext,
} from "react";
import ReactFlow, {
  Background,
  addEdge,
  NodeToolbar,
  BackgroundVariant,
  ReactFlowProvider,
  Edge,
  Connection,
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
  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } =
    useContext(PedigreeContext);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const nodeTypes = useMemo(() => ({ marriage: Marriage }), []);

  const onConnect = useCallback((connection: Edge | Connection) => {
    return setEdges((eds: Edge[]) => {
      const newEdge = { ...connection, type: "step" };
      return addEdge(newEdge, eds);
    });
  }, []);

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
            nodeTypes={nodeTypes}
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
