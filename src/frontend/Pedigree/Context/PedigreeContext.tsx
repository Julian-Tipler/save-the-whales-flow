import React, { useCallback, useEffect, useState } from "react";
import {
  Connection,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { fetchPedigree } from "./Dataservices/fetchPedigree";
import { savePedigree } from "./Dataservices/savePedigree"

export const PedigreeContext = React.createContext<any>({});

export function PedigreeProvider({ children }: any) {
  //Probable have a useEffect that when context is initialized, we make initialNodes the current state stored in Firebase
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((connection: Edge | Connection) => {
    return setEdges((eds: Edge[]) => {
      const newEdge = { ...connection, type: "step" };
      return addEdge(newEdge, eds);
    });
  }, []);

  useEffect(() => {
    fetchPedigree({ id: "5mjGBKYqsortOJ65ZSTH", setNodes, setEdges });
  }, []);

  const savePedigreeResolver = () => {
    savePedigree({ id: "5mjGBKYqsortOJ65ZSTH", nodes, edges });
  }

  const value = {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
    savePedigreeResolver
  };
  return (
    <PedigreeContext.Provider value={value}>
      {children}
    </PedigreeContext.Provider>
  );
}

export default PedigreeContext;
