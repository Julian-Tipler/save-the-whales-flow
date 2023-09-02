import React from "react";
import { Handle, Position } from "reactflow";
import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
import { whaleStatusIcon } from "../../../components/WhaleStatusIcon";
import { Whale } from "../../../../db/Types/Entities";
import { useDrawerContext } from "../context/DrawerContext";
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
  const { setDrawerWhale, drawerWhale } = useDrawerContext();
  const { whales } = useWhalesContext();
  const whale = whales.find((whale) => whale.id === id);
  if (!whale) return null;
  const highlighted = drawerWhale && drawerWhale.id === whale.id;
  const backgroundColor = calculateBackgroundColor(whale);

  return (
    <Card
      width={"100px"}
      backgroundColor={backgroundColor}
      height={"80px"}
      boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.1)"}
      border={highlighted ? "3px solid #A2D9A0" : "none"}
      borderRadius={"4px"}
      padding={"4px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      position={"relative"}
    >
      <Box
        className="whale-node-stripes"
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        opacity="0.2"
        background="repeating-linear-gradient(45deg, gray 0%, gray 10%, #cccccc 10%, #cccccc 20%)"
        display={whale.died ? "block" : "none"}
        pointerEvents={"none"}
      />
      <Handle id="whale-top-target" type="target" position={Position.Top} />
      <Flex flexDirection={"column"} gap={"2px"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"2px"}
        >
          <Heading
            fontSize={"11px"}
            fontWeight={"extrabold"}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace={"nowrap"}
          >
            {whale?.identification || "<no id>"}
          </Heading>
          {whaleStatusIcon({ whale, size: "12px" })}
        </Flex>
        <Text fontSize={"11px"}>{whale?.name || "unnamed"}</Text>
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"flex-end"}>
        {whale?.id ? (
          <>
            <Text
              fontSize={"10px"}
              fontWeight={"bold"}
              color={"#0000FF"}
              cursor={"pointer"}
              onClick={() => setDrawerWhale(whale)}
            >
              Details
            </Text>
          </>
        ) : (
          <Text fontSize={"8px"}>Save pedigree to view details</Text>
        )}
      </Flex>
      <Handle
        id="whale-bottom-source"
        type="source"
        position={Position.Bottom}
      />
    </Card>
  );
};

const calculateBackgroundColor = (whale: Whale) => {
  const dead = whale.died;

  let colorString = "whaleNodes.";

  colorString += whale.gender || "unknown";
  colorString += ".";
  if (dead) {
    colorString += "dead";
  } else {
    colorString += "alive";
  }

  return colorString;
};
