import { useParams } from "react-router-dom";
import { PedigreeHeader } from "./Header/Header";
import { ReactFlowContainer } from "./ReactFlowContainer";
import { usePedigreeContext } from "./context/PedigreeContext";
import { useEffect } from "react";
import { useFetchPedigree } from "./functions/useFetchPedigree";
import { useWhalesContext } from "./context/WhalesContext";
import { BodyGrid } from "../../../../components/BodyGrid";
import { GridItem } from "@chakra-ui/react";

export const Pedigree = () => {
  const { pedigree, setPedigree, setNodes, setEdges } = usePedigreeContext();
  const { setWhales } = useWhalesContext();

  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No pedigree id provided");

  useEffect(() => {
    useFetchPedigree({ id, setPedigree, setWhales, setNodes, setEdges });
  }, [id]);

  if (!pedigree) return null;

  return (
    <BodyGrid>
      <GridItem rowSpan={1} colSpan={{ base: 4, md: 4 }}>
        <ReactFlowContainer />
      </GridItem>
    </BodyGrid>
  );
};
