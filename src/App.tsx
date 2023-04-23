import React from "react";
import Pedigree from "./frontend/Pedigree/Pedigree";
import { PedigreeProvider } from "./frontend/Pedigree/Context/PedigreeContext";

function App() {
  return (
    <PedigreeProvider>
      <Pedigree />
    </PedigreeProvider>
  );
}

export default App;
