import { useCallback, useRef, useState, useMemo } from "react";
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
import { Button, Card, Flex, Text } from "@chakra-ui/react";
import { standardizePosition } from "./helpers";
import { v4 as uuidv4 } from "uuid";
import { WhaleDrawer } from "./WhaleDrawer/WhaleDrawer";
import { useWhalesContext } from "./context/WhalesContext";
import { useSavePedigree } from "./functions/useSavePedigree";
import { Whale } from "../../../db/Types/Entities";
import { useAuthContext } from "../../auth/context/AuthContext";
import { handleOnNodeDragStop } from "./helpers/pedigreeActions";
import { BodyCard } from "../../components/BodyCard";
import { PedigreeHeader } from "./Header/Header";

export function ReactFlowContainer() {
  const reactFlowWrapper = useRef<any>(null);
  const {
    pedigree,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    onEdgesChange,
    onConnect,
  } = usePedigreeContext();
  const { setWhales } = useWhalesContext();
  const { admin } = useAuthContext();

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

  if (!pedigree) return null;

  return (
    <BodyCard>
      <ReactFlowProvider>
        <PedigreeHeader name={pedigree.name} />
        <Flex flexDirection="row">
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
              onNodeDragStop={handleOnNodeDragStop({ nodes, setNodes })}
              // onNodeClick={(event, node) => console.log(event, node)}
              onInit={setReactFlowInstance}
              zoomOnScroll={false}
              connectionMode={ConnectionMode.Loose}
              nodesDraggable={admin ? true : false}
            >
              <NodeToolbar />
              <Background
                variant={BackgroundVariant.Dots}
                gap={20}
                size={1}
                color={admin ? "#000000" : "#E0EBF5"}
                style={{ backgroundColor: "#E0EBF5" }}
              />
            </ReactFlow>
          </div>
          <DragNDrop />
        </Flex>
        <WhaleDrawer />
      </ReactFlowProvider>
    </BodyCard>
  );
}
