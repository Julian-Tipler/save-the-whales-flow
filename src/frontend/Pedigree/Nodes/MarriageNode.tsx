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
      <Handle
        id="marriage-left-target"
        type="target"
        position={Position.Left}
      />
      {/* right */}
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
      {/* bottom */}
      <Handle
        id="marriage-bottom-source"
        type="source"
        position={Position.Bottom}
      />
      <div
      >
        M
      </div>
    </div>
  );
};
