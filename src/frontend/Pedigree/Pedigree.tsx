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
  ConnectionMode,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";
import { DragNDrop } from "./DragNDrop/DragNDrop";
import { MarriageNode, WhaleNode } from "./Nodes";
import PedigreeContext from "./context/PedigreeContext";
import { Button } from "@chakra-ui/react";
import { standardizePosition } from "./helpers";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";

export function Pedigree() {
  const reactFlowWrapper = useRef<any>(null);
  const {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
    savePedigreeResolver,
  } = useContext(PedigreeContext);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const nodeTypes = useMemo(
    () => ({ marriage: MarriageNode, whale: WhaleNode }),
    []
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    async (event: any) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = standardizePosition(
        reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        })
      );

      const whaleId = uuidv4();

      const whaleRef = doc(db, "whales", whaleId);
      await setDoc(whaleRef, {});

      const newNode = {
        id: whaleId,
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds: Node[]) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onNodeDragStop = (event: any, node: Node) => {
    const { id, position } = node;
    const roundedPosition = standardizePosition({
      x: position.x,
      y: position.y,
    });
    const updatedNodes = nodes.map((node: Node) => {
      if (node.id === id) {
        return { ...node, position: roundedPosition };
      }
      return node;
    });
    setNodes(updatedNodes);
  };

  return (
    <div>
      <ReactFlowProvider>
        <div
          className="reactflow-wrapper"
          ref={reactFlowWrapper}
          style={{
            width: "100%",
            height: "80vh",
            border: "2px solid black",
            borderRadius: "5px",
            backgroundColor: "#FFFFFF",
          }}
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
            onNodeDragStop={onNodeDragStop}
            onNodeClick={(event, node) => console.log(event, node)}
            onInit={setReactFlowInstance}
            zoomOnScroll={false}
            connectionMode={ConnectionMode.Loose}
          >
            <NodeToolbar />
            <Background
              variant={BackgroundVariant.Dots}
              gap={20}
              size={1}
              color="#000000"
            />
          </ReactFlow>
        </div>
        <Button
          onClick={() => savePedigreeResolver(setLoading)}
          isLoading={loading}
        >
          Save
        </Button>
        <DragNDrop />
      </ReactFlowProvider>
    </div>
  );
}
