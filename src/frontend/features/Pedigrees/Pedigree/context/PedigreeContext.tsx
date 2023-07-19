import React, {
  useCallback,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
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
    data: Omit<Pedigree, "id" | "nodes" | "edges">;
  }) => void;
  saveLoading: boolean;
  setSaveLoading: React.Dispatch<React.SetStateAction<boolean>>;
  saveWarning: boolean;
  headerLoading: boolean;
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
  const [saveWarning, setSaveWarning] = useState(false);
  const [headerLoading, setHeaderLoading ] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSaveWarning(true);
    }, 30000);
  }, [saveLoading]);

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
    data: Omit<Pedigree, "id" | "nodes" | "edges">;
  }) => {
    setHeaderLoading(true);
    if (!pedigree) throw new Error("No pedigree found");
    await updatePedigreeDetails({ id, data });
    const updatedPedigree = await fetchPedigree({ id: id });
    if(!updatedPedigree) throw new Error("No pedigree found");
    setPedigree({ id: updatedPedigree.id, name: updatedPedigree.name });
    setHeaderLoading(false)
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
    saveWarning,
    headerLoading,
  };
  return (
    <PedigreeContext.Provider value={value}>
      {children}
    </PedigreeContext.Provider>
  );
}

export const usePedigreeContext = () => useContext(PedigreeContext);
