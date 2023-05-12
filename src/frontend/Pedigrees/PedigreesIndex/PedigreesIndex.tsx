import React, { useContext } from "react";
import { AddIcon } from "@chakra-ui/icons";

import PedigreesIndexContext from "./context/PedigreesIndexContext";
import { Pedigree } from "../../../db/Types/Entities";
import { PedigreeItem } from "./PedigreeItem";

export const PedigreesIndex = () => {
  const { pedigrees, createPedigreeResolver } = useContext(
    PedigreesIndexContext
  );
  console.log(createPedigreeResolver);
  return (
    <>
      {pedigrees.map((pedigree: Pedigree, i: Number) => {
        return <PedigreeItem key={`pedigree-${i}`} pedigree={pedigree} />;
      })}
      <AddIcon
        marginLeft={"4px"}
        color={"green.500"}
        onClick={() => createPedigreeResolver()}
      />
    </>
  );
};
