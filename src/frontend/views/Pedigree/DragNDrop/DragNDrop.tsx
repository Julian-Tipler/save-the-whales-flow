import { useAuthContext } from "../../../auth/context/AuthContext";
import { usePedigreeContext } from "../context/PedigreeContext";
import { useWhalesContext } from "../context/WhalesContext";
import { useSavePedigree } from "../functions/useSavePedigree";
import { onDragStart } from "../helpers/pedigreeActions";
import "./DragNDrop.css";
import { Box, Button, Card, Flex, Heading, Text } from "@chakra-ui/react";

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
    <Flex
      direction={"column"}
      w="200px"
      paddingLeft={"4"}
      paddingRight={"4"}
      justifyContent={"space-between"}
    >
      <Flex direction={"column"} gap={"4"}>
        <Text className="description">Drag onto the pedigree:</Text>
        <Flex>
          <Card
            width={"120px"}
            height={"90px"}
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "whale")}
            draggable
            backgroundColor={"blue.100"}
          >
            <Flex
              height={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Heading size="sm">Whale</Heading>
            </Flex>
          </Card>
        </Flex>
      </Flex>
      <Box>
        {admin && (
          <>
            {saveWarning && (
              <Text color="red">Make sure to save to persist changes!</Text>
            )}
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
          </>
        )}
      </Box>
    </Flex>
  );
};
