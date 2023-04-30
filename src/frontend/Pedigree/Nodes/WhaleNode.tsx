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
  console.log(id);
  return (
    <div>
      {/* top */}
      <Handle id="whale-top-target" type="target" position={Position.Top} />
      {/* bottom */}
      <Handle
        id="whale-bottom-source"
        type="source"
        position={Position.Bottom}
      />
      <Box backgroundColor={"gray.100"} borderRadius={"m"} padding="5px">
        <Flex direction={"column"} alignItems={"center"}>
          <Text fontSize={"xs"}>Shamu</Text>
          <Link to={`whales/${1}`}>
            <Text color={"#0000FF"} fontSize={"xs"}>
              Details
            </Text>
          </Link>
        </Flex>
      </Box>
    </div>
  );
};
