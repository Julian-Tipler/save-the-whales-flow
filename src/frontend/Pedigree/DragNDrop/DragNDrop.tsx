import React from "react";
import "./DragNDrop.css";
import { MarriageNode } from "../Nodes/MarriageNode";
import { WhaleNode } from "../Nodes/WhaleNode";

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
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "whale")}
        draggable
      >
        Whale
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "marriage")}
        draggable
      >
        Marriage
      </div>
    </aside>
  );
};
