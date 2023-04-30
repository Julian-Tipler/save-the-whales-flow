import React from "react";
import { Handle, Position } from "reactflow";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import "./WhaleNode.css";
import { Link } from "react-router-dom";

export const WhaleNode = () => {
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
      <Box backgroundColor={"gray.100"} borderRadius={"2xl"} padding="10px">
        <Text size={"xs"}>Shamu</Text>
        <Button variant="solid" colorScheme="blue" size="xs">
          <Link to={`whales/${1}`}>Details</Link>
        </Button>
      </Box>
    </div>
  );
};
