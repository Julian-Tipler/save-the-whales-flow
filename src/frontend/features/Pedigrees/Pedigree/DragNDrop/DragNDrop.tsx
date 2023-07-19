import { useAuthContext } from "../../../../Auth/context/AuthContext";
import { usePedigreeContext } from "../context/PedigreeContext";
import { useWhalesContext } from "../context/WhalesContext";
import { useSavePedigree } from "../functions/useSavePedigree";
import { onDragStart } from "../helpers/pedigreeActions";
import "./DragNDrop.css";
import { Button, Card, Flex, Heading, Text } from "@chakra-ui/react";

export const DragNDrop = () => {
  const { admin } = useAuthContext();
  const {
    pedigree,
    setPedigree,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    onEdgesChange,
    onConnect,
    setSaveLoading,
    saveLoading,
    saveWarning,
  } = usePedigreeContext();
  const { whales, setWhales } = useWhalesContext();

  if (!pedigree) return null;

  return (
    <Flex direction={"column"} gap="4" w="400px" padding={"20px"}>
      <div className="description">Drag onto the pedigree:</div>
      <Flex>
        <Card
          width={"120px"}
          height={"90px"}
          className="dndnode"
          onDragStart={(event) => onDragStart(event, "whale")}
          draggable
          backgroundColor={"blue.100"}
        >
          <Flex height={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Heading size="sm">Whale</Heading>
          </Flex>
        </Card>
      </Flex>
      {admin && (
        <>
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
          {saveWarning && (
            <Text color="red">Make sure to save to persist changes!</Text>
          )}
        </>
      )}
    </Flex>
  );
};
