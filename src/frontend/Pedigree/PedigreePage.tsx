import React from "react";
import { Pedigree } from "./Pedigree";
import { PedigreeProvider } from "./Context/PedigreeContext";

export const PedigreePage = () => {
  return (
    <PedigreeProvider>
      <Pedigree />
    </PedigreeProvider>
  );
};
