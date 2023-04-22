import React from "react";
import { Handle, Position } from "reactflow";

export const Marriage = ({ onDragStart }: any) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom}/>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "mockCustom")}
        draggable
      >
        ...
      </div>
    </>
  );
};
