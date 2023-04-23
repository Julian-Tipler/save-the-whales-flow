import React from "react";
import { Handle, Position } from "reactflow";
import { Box, Text } from "@chakra-ui/react";
import "./WhaleNode.css";

export const WhaleNode = ({ onDragStart }: any) => {
  return (
    <>
      {/* top */}
      <Handle id="whale-top-target" type="target" position={Position.Top} />
      {/* bottom */}
      <Handle
        id="whale-bottom-source"
        type="source"
        position={Position.Bottom}
      />
      <div
        className="dndnode whale"
        onDragStart={(event) => onDragStart(event, "mockCustom")}
        draggable
      >
        <Box>
          <Text>Whale </Text>
        </Box>
      </div>
    </>
  );
};
