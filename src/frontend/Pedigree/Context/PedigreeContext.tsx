import React, { useCallback, useState } from "react";
import {
  Connection,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { initialNodes } from "./InitialNodes";

export const PedigreeContext = React.createContext<any>({});

export function PedigreeProvider({ children }: any) {
  //Probable have a useEffect that when context is initialized, we make initialNodes the current state stored in Firebase
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((connection: Edge | Connection) => {
    return setEdges((eds: Edge[]) => {
      const newEdge = { ...connection, type: "step" };
      return addEdge(newEdge, eds);
    });
  }, []);

  const value = {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
  };
  return (
    <PedigreeContext.Provider value={value}>
      {children}
    </PedigreeContext.Provider>
  );
}

export default PedigreeContext;
