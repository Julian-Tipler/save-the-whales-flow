import React, { useState } from "react";
import { useEdgesState, useNodesState } from "reactflow";
import { initialNodes } from "./InitialNodes";

export const PedigreeContext = React.createContext<any>({});

export function PedigreeProvider({ children }: any) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const value = {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
  };
  return (
    <PedigreeContext.Provider value={value}>{children}</PedigreeContext.Provider>
  );
}

export default PedigreeContext;
