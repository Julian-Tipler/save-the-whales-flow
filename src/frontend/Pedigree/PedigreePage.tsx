import React from "react";
import { Pedigree } from "./Pedigree";
import { PedigreeProvider } from "./Context/PedigreeContext";

const PedigreePage = () => {
  return (
    <PedigreeProvider>
      <Pedigree />
    </PedigreeProvider>
  );
};

export default PedigreePage;
