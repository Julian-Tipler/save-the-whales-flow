import React, { useCallback, useEffect, createContext, useState } from "react";
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
  updatePedigree,
  updatePedigreeDetails,
} from "../../../../../db/dataServices";
import { Pedigree } from "../../../../../db/Types/Entities";
import { fetchWhales } from "../../../../../db/dataServices/fetchWhales";
import { useParams } from "react-router-dom";

type PedigreeContextValue = {
  pedigree: Pedigree | null;
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  onNodesChange: any;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: any;
  onConnect: (connection: Edge | Connection) => void;
  savePedigreeResolver: ({ id }: { id: string }) => void;
  updatePedigreeDetailsResolver: ({ data }: { data: Pedigree }) => void;
  saveLoading: boolean;
};

const PedigreeContext = createContext<PedigreeContextValue>(
  {} as PedigreeContextValue
);

export function PedigreeProvider({ children }: any) {
  //Probable have a useEffect that when context is initialized, we make initialNodes the current state stored in Firebase
  const [pedigree, setPedigree] = useState<Pedigree | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
  const [saveLoading, setSaveLoading] = useState(false);

  const onConnect = useCallback((connection: Edge | Connection) => {
    return setEdges((eds: Edge[]) => {
      const newEdge = { ...connection, type: "step" };
      return addEdge(newEdge, eds);
    });
  }, []);

  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No pedigree id provided");

  useEffect(() => {
    fetchPedigreeResolver({ id });
  }, []);

  // One time fetch (and on save)
  const fetchPedigreeResolver = async ({ id }: { id: string }) => {
    //try catch?
    let pedigree = await fetchPedigree({
      id: id,
    });

    let nodes: Node[] = [];
    let edges: Edge[] = [];
    if (pedigree) {
      // fetches whales for each node
      // currently stores these whales in the node data
      if (pedigree.nodes && pedigree.nodes.length) {
        const whales = await fetchWhales({
          ids: pedigree.nodes.map((node) => node.id),
        });
        nodes = pedigree.nodes.map((node) => {
          const whale = whales.find((whale) => whale.id === node.id);
          return {
            ...node,
            data: {
              ...node.data,
              whale,
            },
          };
        });
      }
      if (pedigree.edges && pedigree.edges.length) {
        edges = pedigree.edges.map((edge) => {
          return {
            ...edge,
          };
        });
      }
      setPedigree({ id: pedigree.id, name: pedigree.name });
      setNodes(nodes);
      setEdges(edges);
    } else {
      console.log("No pedigree found with given id");
    }
  };

  const savePedigreeResolver = async ({ id }: { id: string }) => {
    if (!pedigree) throw new Error("No pedigree found");
    setSaveLoading(true);
    await updatePedigree({ id, nodes, edges });
    await fetchPedigreeResolver({ id });
    setSaveLoading(false);
  };

  const updatePedigreeDetailsResolver = async ({
    id,
    data,
  }: {
    id: string;
    data: Pedigree;
  }) => {
    if (!pedigree) throw new Error("No pedigree found");
    await updatePedigreeDetails({ id, data });
    const updatedPedigree = await fetchPedigree({ id: id });
    updatedPedigree &&
      setPedigree({ id: updatedPedigree.id, name: updatedPedigree.name });
  };

  const value = {
    pedigree,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
    savePedigreeResolver,
    updatePedigreeDetailsResolver,
    saveLoading,
  };
  return (
    <PedigreeContext.Provider value={value}>
      {children}
    </PedigreeContext.Provider>
  );
}

export default PedigreeContext;
