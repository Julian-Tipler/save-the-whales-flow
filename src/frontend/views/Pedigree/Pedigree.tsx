import { useParams } from "react-router-dom";
import { PedigreeHeader } from "./Header/Header";
import { ReactFlowContainer } from "./ReactFlowContainer";
import { usePedigreeContext } from "./context/PedigreeContext";
import { useEffect, useState } from "react";
import { useFetchPedigree } from "./functions/useFetchPedigree";
import { useWhalesContext } from "./context/WhalesContext";
import { BodyGrid } from "../../components/BodyGrid";
import { GridItem, Spinner } from "@chakra-ui/react";
import { WhalesIndex } from "./WhalesIndex";

export const Pedigree = () => {
  const { pedigree, setPedigree, setNodes, setEdges } = usePedigreeContext();
  const { whales, setWhales } = useWhalesContext();

  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No pedigree id provided");

  useEffect(() => {
    useFetchPedigree({
      id,
      setPedigree,
      setWhales,
      setNodes,
      setEdges,
      loading,
      setLoading,
    });
  }, [id]);

  if (loading) return <Spinner />;
  if (!pedigree) return <div>Pedigree not found</div>;

  return <ReactFlowContainer />;
};
