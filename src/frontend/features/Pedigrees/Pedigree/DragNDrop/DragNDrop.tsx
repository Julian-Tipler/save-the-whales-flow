import React from "react";
import "./DragNDrop.css";
import { Card, Flex, Heading, Spacer } from "@chakra-ui/react";

export const DragNDrop = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Card padding={"10px"}>
      <Flex direction={"column"} gap="4">
        <div className="description">
          You can drag these nodes to the pedigree above.
        </div>
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
    </Card>
  );
};
