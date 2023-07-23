import { useParams } from "react-router-dom";
import { PedigreeHeader } from "./Header/Header";
import { ReactFlowContainer } from "./ReactFlowContainer";
import { usePedigreeContext } from "./context/PedigreeContext";
import { useEffect } from "react";
import { useFetchPedigree } from "./functions/useFetchPedigree";
import { useWhalesContext } from "./context/WhalesContext";
import { BodyGrid } from "../../components/BodyGrid";
import { GridItem } from "@chakra-ui/react";
import { WhalesIndex } from "./WhalesIndex";

export const Pedigree = () => {
  const { pedigree, setPedigree, setNodes, setEdges } = usePedigreeContext();
  const { whales, setWhales } = useWhalesContext();

  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No pedigree id provided");

  useEffect(() => {
    useFetchPedigree({ id, setPedigree, setWhales, setNodes, setEdges });
  }, [id]);

  if (!pedigree) return null;

  return (
    <BodyGrid>
      <GridItem rowSpan={2} colSpan={{ base: 4, md: 4 }}>
        <ReactFlowContainer />
      </GridItem>
      <GridItem rowSpan={1} colSpan={{ base: 2, md: 2 }}>
        <WhalesIndex whales={whales} />
      </GridItem>
    </BodyGrid>
  );
};
