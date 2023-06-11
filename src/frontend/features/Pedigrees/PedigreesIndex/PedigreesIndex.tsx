import { useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

import { usePedigreesIndexContext } from "./context/PedigreesIndexContext";
import { Pedigree } from "../../../../db/Types/Entities";
import { PedigreeItem } from "./PedigreeItem";

export const PedigreesIndex = () => {
  const { pedigrees, createPedigreeResolver, fetchPedegreesResolver } =
    usePedigreesIndexContext();

  useEffect(() => {
    fetchPedegreesResolver();
  }, []);

  return (
    <>
      <Flex flexDirection={"column"} gap={"4"}>
        {pedigrees.map((pedigree: Pedigree, i: Number) => {
          return (
            <>
              <PedigreeItem key={`pedigree-${i}`} pedigree={pedigree} />
            </>
          );
        })}
      </Flex>
      <AddIcon
        marginLeft={"4px"}
        color={"green.500"}
        onClick={() =>
          createPedigreeResolver({
            data: { name: "new pedigree", nodes: [], edges: [] },
          })
        }
      />
    </>
  );
};
