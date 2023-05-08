import React from "react";
import { Handle, Position } from "reactflow";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./WhaleNode.css";
import { Link } from "react-router-dom";

export const WhaleNode = ({ id, data, selected }) => {
  const { whale } = data;

  return (
    <Box width={"80px"} height={"60px"}>
      {/* top */}
      <Handle id="whale-top-target" type="target" position={Position.Top} />
      {/* bottom */}
      <Box
        backgroundColor={"gray.100"}
        padding={"5px"}
        height={"100%"}
        borderRadius={"5px"}
      >
        <Flex direction={"column"} alignItems={"center"}>
          <Text fontSize={"10px"}>{`${whale?.name || "unnamed"}`}</Text>
          {whale?.id ? (
            <Link to={`whales/${whale?.id}`}>
              <Text color={"#0000FF"} fontSize={"10px"}>
                Details
              </Text>
            </Link>
          ) : (
            <Text color={"#808080"} fontSize={"10px"}>
              Unsaved
            </Text>
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
