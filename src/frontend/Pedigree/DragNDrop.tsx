import React from "react";
import "./DragNDrop.css";
import { Marriage } from "./Nodes/Marriage";

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
      {/* // TODO replace with custom whale node */}
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Whale Node
      </div>
      <Marriage onDragStart={(event: any) => onDragStart(event, "marriage")} />
    </aside>
  );
};
