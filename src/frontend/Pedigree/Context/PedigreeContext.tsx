import React, { useCallback, useEffect, createContext, useState } from "react";
import {
  Connection,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { fetchPedigree, savePedigree } from "../../../db/dataServices";
import { Pedigree } from "../../../db/Types/Entities";
import { getWhales } from "../../../db/dataServices/getWhales";

const PedigreeContext = createContext<any>({});

export function PedigreeProvider({ children }: any) {
  //Probable have a useEffect that when context is initialized, we make initialNodes the current state stored in Firebase
  const [pedigree, setPedigree] = useState<Pedigree | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [saveLoading, setSaveLoading] = useState(false);

  const onConnect = useCallback((connection: Edge | Connection) => {
    return setEdges((eds: Edge[]) => {
      const newEdge = { ...connection, type: "step" };
      return addEdge(newEdge, eds);
    });
  }, []);

  useEffect(() => {
    fetchPedigreeResolver();
  }, []);

  useEffect(() => {
    if (pedigree && pedigree.nodes) {
      setNodes(pedigree.nodes);
    }
    if (pedigree && pedigree.edges) {
      setEdges(pedigree.edges);
    }
  }, [pedigree]);

  const fetchPedigreeResolver = async () => {
    let pedigree = await fetchPedigree({
      id: "5mjGBKYqsortOJ65ZSTH",
    });
    if (pedigree) {
      if (pedigree.nodes) {
        const whales = await getWhales({
          ids: pedigree.nodes.map((node) => node.id),
        });
        const nodes = pedigree.nodes.map((node) => {
          const whale = whales.find((whale) => whale.id === node.id);
          console.log(whale);
          return {
            ...node,
            data: {
              ...node.data,
              whale,
            },
          };
        });
        pedigree = { ...pedigree, nodes };
      }
      setPedigree(pedigree);
    } else {
      console.log("No pedigree found with id");
    }
  };

  const savePedigreeResolver = async () => {
    setSaveLoading(true);
    await savePedigree({ id: "5mjGBKYqsortOJ65ZSTH", nodes, edges });
    await fetchPedigreeResolver();
    setSaveLoading(false);
  };

  const value = {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
    savePedigreeResolver,
    saveLoading,
  };
  return (
    <PedigreeContext.Provider value={value}>
      {children}
    </PedigreeContext.Provider>
  );
}

export default PedigreeContext;
