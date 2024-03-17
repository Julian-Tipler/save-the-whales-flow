import React from "react";
import { Handle, Position } from "reactflow";
import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
import { whaleStatusIcon } from "../../../components/WhaleStatusIcon";
import { Whale } from "../../../../db/Types/Entities";
import { useDrawerContext } from "../context/DrawerContext";
import { useWhalesContext } from "../context/WhalesContext";
import { NodeIcon } from "./NodeIcon";
import { useAuthContext } from "../../../auth/context/AuthContext";

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
  const { admin } = useAuthContext();
  const { setDrawerWhale, drawerWhale } = useDrawerContext();
  const { whales } = useWhalesContext();
  const whale = whales.find((whale) => whale.id === id);
  if (!whale) return null;
  const highlighted = !!drawerWhale && drawerWhale.id === whale.id;
  const backgroundColor = calculateBackgroundColor(whale);
  return (
    <Box
      width={"100px"}
      height={"80px"}
      borderRadius={"4px"}
      padding={"4px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"start"}
      alignItems={"center"}
      position={"relative"}
    >
      <NodeIcon
        highlighted={highlighted}
        gender={whale.gender}
        died={whale.died}
      />
      <Handle
        id="whale-top-target"
        type="target"
        position={Position.Top}
        hidden={!admin}
      />
      <Flex flexDirection={"column"} gap={"2px"} alignItems={"center"}>
        <Heading
          fontSize={"11px"}
          fontWeight={"extrabold"}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace={"nowrap"}
          color={whale?.id ? "#0000FF" : "#000000"}
          onClick={whale?.id ? () => setDrawerWhale(whale) : () => {}}
        >
          {whale?.identification || "<no id>"}
        </Heading>
        <Text fontSize={"11px"}>{whale?.name || "unnamed"}</Text>
        {whale?.died && <Text fontSize={"11px"}>{whale.died}</Text>}
      </Flex>
      <Handle
        id="whale-bottom-source"
        type="source"
        position={Position.Bottom}
        hidden={!admin}
      />
    </Box>
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
