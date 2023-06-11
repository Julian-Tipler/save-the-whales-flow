import { useCallback, useRef, useState, useMemo, useEffect } from "react";
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
import { usePedigreeContext } from "./context/PedigreeContext";
import { Button } from "@chakra-ui/react";
import { standardizePosition } from "./helpers";
import { v4 as uuidv4 } from "uuid";
import { PedigreeHeader } from "./Header/Header";
import { useParams } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";
import { useWhalesContext } from "./context/WhalesContext";
import { useFetchPedigree } from "./functions/useFetchPedigree";
import { useSavePedigree } from "./functions/useSavePedigree";
import { Whale } from "../../../../db/Types/Entities";
import { useAuthContext } from "../../../Auth/context/AuthContext";

export function Pedigree() {
  const reactFlowWrapper = useRef<any>(null);
  const {
    pedigree,
    setPedigree,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
    setSaveLoading,
    saveLoading,
  } = usePedigreeContext();
  const { whales, setWhales } = useWhalesContext();
  const { admin } = useAuthContext();

  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No pedigree id provided");

  useEffect(() => {
    useFetchPedigree({ id, setPedigree, setWhales, setNodes, setEdges });
  }, [id]);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

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

      const newWhaleId = uuidv4();

      const newNode = {
        id: newWhaleId,
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds: Node[]) => nds.concat(newNode));

      setWhales((whales: Whale[]) => whales.concat({ id: newWhaleId }));
    },
    [reactFlowInstance]
  );

  const onNodeDragStop = (event: any, node: Node) => {
    const { id, position } = node;
    const standardizedPosition = standardizePosition({
      x: position.x,
      y: position.y,
    });
    const updatedNodes = nodes.map((node: Node) => {
      if (node.id === id) {
        return { ...node, position: standardizedPosition };
      }
      return node;
    });
    setNodes(updatedNodes);
  };

  if (!pedigree) return null;
  return (
    <div>
      <PedigreeHeader name={pedigree.name} />
      <ReactFlowProvider>
        <div
          className="reactflow-wrapper"
          ref={reactFlowWrapper}
          style={{
            width: "100%",
            height: "70vh",
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
              color={"#000000"}
              style={{ backgroundColor: "#e6e6e6" }}
            />
          </ReactFlow>
        </div>
        {admin && (
          <Button
            onClick={() =>
              useSavePedigree({
                id: pedigree.id,
                nodes,
                edges,
                whales,
                setPedigree,
                setWhales,
                setNodes,
                setSaveLoading,
              })
            }
            isLoading={saveLoading}
          >
            Save
          </Button>
        )}
        <DragNDrop />
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
}
