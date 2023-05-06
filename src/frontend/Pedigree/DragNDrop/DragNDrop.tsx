import React from "react";
import "./DragNDrop.css";
import { MarriageNode } from "../Nodes/MarriageNode";
import { WhaleNode } from "../Nodes/WhaleNode";
import { Box } from "@chakra-ui/react";

export const DragNDrop = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <Box
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "whale")}
        draggable
      >
        Whale
      </Box>
      <Box
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "marriage")}
        draggable
      >
        Marriage
      </Box>
    </aside>
  );
};
