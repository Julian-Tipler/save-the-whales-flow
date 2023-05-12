import React, { useContext } from "react";
import PedigreesIndexContext from "./context/PedigreesIndexContext";
import { Pedigree } from "../../../db/Types/Entities";

export const PedigreesIndex = () => {
  const { pedigrees } = useContext(PedigreesIndexContext);
  return (
    <>
      {pedigrees.map((pedigree: Pedigree) => {
        return <div key={pedigree.id}>{pedigree.name}</div>;
      })}
    </>
  );
};
