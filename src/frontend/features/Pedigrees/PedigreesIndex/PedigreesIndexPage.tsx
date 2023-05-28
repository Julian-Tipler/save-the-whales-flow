import React from "react";
import { PedigreesIndex } from "./PedigreesIndex";
import { PedigreesIndexProvider } from "./context/PedigreesIndexContext";

const PedigreePage = () => {
  return (
    <PedigreesIndexProvider>
      <PedigreesIndex />
    </PedigreesIndexProvider>
  );
};

export default PedigreePage;
