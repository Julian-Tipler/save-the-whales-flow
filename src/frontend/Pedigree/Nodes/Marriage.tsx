import React from "react";
import { Handle, Position } from "reactflow";
import "./Marriage.css"

export const Marriage = ({ onDragStart }: any) => {
  return (
    <>
      {/* targets */}
      <Handle
        id="marriage-left-source"
        type="source"
        position={Position.Left}
      />
      <Handle
        id="marriage-left-target"
        type="target"
        position={Position.Left}
      />
      <Handle
        id="marriage-right-source"
        type="source"
        position={Position.Right}
      />
      <Handle
        id="marriage-right-target"
        type="target"
        position={Position.Right}
      />
      {/* sources */}
      <Handle
        id="marriage-bottom-source"
        type="source"
        position={Position.Bottom}
      />
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
