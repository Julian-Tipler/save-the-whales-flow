import React from "react";
import Pedigree from "./frontend/Pedigree/Pedigree";
import { PedigreeProvider } from "./frontend/Pedigree/Context/PedigreeContext";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <PedigreeProvider>
      <ChakraProvider>
        <Pedigree />
      </ChakraProvider>
    </PedigreeProvider>
  );
}

export default App;
