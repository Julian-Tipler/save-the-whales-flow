import React from "react";
import { Handle, Position } from "reactflow";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { whaleStatusIcon } from "../../../components/WhaleStatusIcon";
import { Whale } from "../../../../db/Types/Entities";
import { useDrawerContext } from "../context/DrawerContext";
import { useWhalesContext } from "../context/WhalesContext";
import "./WhaleNode.css";

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
  const { setWhaleForm, whaleForm } = useDrawerContext();
  const { whales } = useWhalesContext();

  const whale = whales.find((whale) => whale.id === id);
  if (!whale) return null;

  const highlighted = whaleForm && whale && whaleForm.id === whale.id;
  const backgroundColor = calculateBackgroundColor(whale);

  return (
    <Card
      width={"100px"}
      height={"80px"}
      backgroundColor={backgroundColor}
      boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.1)"}
      border={highlighted ? "3px solid #A2D9A0" : "none"}
      borderRadius={"4px"}
      padding={"4px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      className={`whale-node ${whale.died ? "dead" : ""}`}
    >
      <Handle id="whale-top-target" type="target" position={Position.Top} />
      <Flex flexDirection={"column"} gap={"2px"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"2px"}
        >
          <Heading fontSize={"11px"} fontWeight={"extrabold"}>
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
              onClick={() => setWhaleForm(whale)}
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
  switch (whale.gender) {
    case "male":
      return "blue.200";
    case "female":
      return "pink";
    default:
      return "white";
  }
};
