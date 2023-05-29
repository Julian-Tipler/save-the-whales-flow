import { Pedigree } from "./Pedigree";
import { PedigreeProvider } from "./context/PedigreeContext";

const PedigreePage = () => {
  return (
    <PedigreeProvider>
      <Pedigree />
    </PedigreeProvider>
  );
};

export default PedigreePage;
