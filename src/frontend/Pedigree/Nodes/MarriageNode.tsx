import React from "react";
import { Handle, Position } from "reactflow";
import "./MarriageNode.css";

export const MarriageNode = ({ onDragStart }: any) => {
  return (
    <div>
      {/* left */}
      <Handle
        id="marriage-left-source"
        type="source"
        position={Position.Left}
      />
      {/* right */}
      <Handle
        id="marriage-right-source"
        type="source"
        position={Position.Right}
      />
      {/* bottom */}
      <Handle
        id="marriage-bottom-source"
        type="source"
        position={Position.Bottom}
      />
      <div>*</div>
    </div>
  );
};
