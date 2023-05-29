import React from "react";
import { Handle, Position } from "reactflow";
import { Box, Card, CardBody, CardFooter, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { whaleStatusIcon } from "../../../../helpers/whaleStatusIcon";
import { Whale } from "../../../../../db/Types/Entities";

type NodeData = {
  whale: Whale;
  label: string;
};

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
  data: NodeData;
  selected: Boolean;
}) => {
  const { whale } = data;

  return (
    <Card width={"100px"} height={"80px"} backgroundColor={"blue.100"}>
      <Handle id="whale-top-target" type="target" position={Position.Top} />
      <CardBody padding={"1"}>
        <Flex
          direction={"column"}
          gap={"1"}
          justifyContent={"space-between"}
          height={"100%"}
        >
          <Flex direction={"column"}>
            <Flex gap={"1"}>
              <Text fontSize={"10px"}>{`${
                whale?.identification || "<no id>"
              }`}</Text>
              {whaleStatusIcon({ whale, size: "12px" })}
            </Flex>
            <Text fontSize={"10px"}>{`${whale?.name || "unnamed"}`}</Text>
          </Flex>
          {whale?.id ? (
            <Link to={`/whales/${whale?.id}`}>
              <Text color={"#0000FF"} fontSize={"10px"}>
                Details
              </Text>
            </Link>
          ) : (
            <Text fontSize={"8px"}>Save pedigree to view details</Text>
          )}
        </Flex>
      </CardBody>
      <Handle
        id="whale-bottom-source"
        type="source"
        position={Position.Bottom}
      />
    </Card>
  );
};
