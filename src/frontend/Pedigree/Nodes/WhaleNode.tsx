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

export const WhaleNode = ({ onDragStart }: any) => {
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
      <div
      >
        <Card size="sm" backgroundColor={"gray.100"} borderRadius={"2xl"}>
          <CardHeader>
            <Heading size="xs">Shamu</Heading>
          </CardHeader>
          <CardFooter>
            <Button variant="solid" colorScheme="blue" size="sm">
              Details
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
