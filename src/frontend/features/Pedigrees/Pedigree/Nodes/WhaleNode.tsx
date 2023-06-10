import React from "react";
import { Handle, Position } from "reactflow";
import { Box, Card, CardBody, CardFooter, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { whaleStatusIcon } from "../../../../helpers/whaleStatusIcon";
import { Whale } from "../../../../../db/Types/Entities";
import { useSidebarContext } from "../context/SidebarContext";
import { useWhalesContext } from "../context/WhalesContext";

type NodeData = {
  // whale: Whale;
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
  const { setWhaleForm } = useSidebarContext();
  const { whales } = useWhalesContext();

  const whale = whales.find((whale) => whale.id === id);

  if (!whale) return null;

  return (
    <Card
      width={"100px"}
      height={"80px"}
      backgroundColor={"white"}
      boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.1)"}
      borderRadius={"4px"}
      padding={"4px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Flex flexDirection={"column"} gap={"2px"}>
        <Flex alignItems={"center"} gap={"2px"}>
          <Text fontSize={"12px"} fontWeight={"bold"}>
            {whale?.identification || "<no id>"}
          </Text>
          {whaleStatusIcon({ whale, size: "12px" })}
        </Flex>
        <Text fontSize={"12px"}>{whale?.name || "unnamed"}</Text>
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"flex-end"}>
        {whale?.id ? (
          <>
            <Text
              fontSize={"10px"}
              fontWeight={"bold"}
              color={"#0000FF"}
              cursor={"pointer"}
              onClick={() => setWhaleForm(whale)}
            >
              Edit
            </Text>
            <Link to={`/whales/${whale?.id}`}>
              <Text
                fontSize={"10px"}
                color={"#0000FF"}
                textDecoration={"underline"}
                cursor={"pointer"}
              >
                Details
              </Text>
            </Link>
          </>
        ) : (
          <Text fontSize={"8px"}>Save pedigree to view details</Text>
        )}
      </Flex>
    </Card>
  );
};
