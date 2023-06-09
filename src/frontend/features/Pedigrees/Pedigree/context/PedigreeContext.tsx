import React, { useCallback, createContext, useState, useContext } from "react";
import {
  Connection,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
  Node,
} from "reactflow";

import {
  fetchPedigree,
  updatePedigreeDetails,
} from "../../../../../db/dataServices";
import { Pedigree } from "../../../../../db/Types/Entities";

type PedigreeContextValue = {
  pedigree: Pick<Pedigree, "id" | "name"> | null;
  setPedigree: React.Dispatch<
    React.SetStateAction<Pick<Pedigree, "id" | "name"> | null>
  >;
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  onNodesChange: any;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: any;
  onConnect: (connection: Edge | Connection) => void;
  updatePedigreeDetailsResolver: ({
    id,
    data,
  }: {
    id: string;
    data: Pedigree;
  }) => void;
  saveLoading: boolean;
  setSaveLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const PedigreeContext = createContext<PedigreeContextValue>(
  {} as PedigreeContextValue
);

export function PedigreeProvider({ children }: any) {
  const [pedigree, setPedigree] = useState<Pick<
    Pedigree,
    "id" | "name"
  > | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
  const [saveLoading, setSaveLoading] = useState(false);

  const onConnect = useCallback((connection: Edge | Connection) => {
    return setEdges((eds: Edge[]) => {
      const newEdge = { ...connection, type: "step" };
      return addEdge(newEdge, eds);
    });
  }, []);

  const updatePedigreeDetailsResolver = async ({
    id,
    data,
  }: {
    id: string;
    data: any;
  }) => {
    if (!pedigree) throw new Error("No pedigree found");
    await updatePedigreeDetails({ id, data });
    const updatedPedigree = await fetchPedigree({ id: id });
    updatedPedigree &&
      setPedigree({ id: updatedPedigree.id, name: updatedPedigree.name });
  };

  const value = {
    pedigree,
    setPedigree,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
    updatePedigreeDetailsResolver,
    saveLoading,
    setSaveLoading,
  };
  return (
    <PedigreeContext.Provider value={value}>
      {children}
    </PedigreeContext.Provider>
  );
}

export const usePedigreeContext = () => useContext(PedigreeContext);
