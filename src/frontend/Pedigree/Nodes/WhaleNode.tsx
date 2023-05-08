import React from "react";
import { Handle, Position } from "reactflow";
import { Box, Flex, Text } from "@chakra-ui/react";
import "./WhaleNode.css";
import { Link } from "react-router-dom";

/**
 * WhaleNode is populated by ReactFlow. ReactFLow is passed nodes array which it maps through
 * and renders WhaleNodes one by one. Whatever I pass to ReactFlow (in this case nodes array)
 * will be rendered as WhaleNodes. If the right data is in nodes, then the right data will be in WhaleNode
 * @param id
 * @param data contains a whale object
 * @param selected
 */
export const WhaleNode = ({
  id,
  data,
  selected,
}: {
  id: string;
  data: any;
  selected: Boolean;
}) => {
  const { whale } = data;

  return (
    <Box width={"80px"} height={"60px"}>
      <Handle id="whale-top-target" type="target" position={Position.Top} />
      <Box
        backgroundColor={"gray.100"}
        padding={"5px"}
        height={"100%"}
        borderRadius={"5px"}
      >
        <Flex direction={"column"} alignItems={"center"}>
          <Text fontSize={"10px"}>{`${whale?.name || "unnamed"}`}</Text>
          {whale?.id && (
            <Link to={`whales/${whale?.id}`}>
              <Text color={"#0000FF"} fontSize={"10px"}>
                Details
              </Text>
            </Link>
          )}
        </Flex>
      </Box>
      <Handle
        id="whale-bottom-source"
        type="source"
        position={Position.Bottom}
      />
    </Box>
  );
};
