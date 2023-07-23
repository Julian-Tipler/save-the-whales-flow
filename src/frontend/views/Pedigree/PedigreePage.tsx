import { Pedigree } from "./Pedigree";
import { PedigreeProvider } from "./context/PedigreeContext";
import { DrawerProvider } from "./context/DrawerContext";
import { WhalesProvider } from "./context/WhalesContext";

const PedigreePage = () => {
  return (
    <PedigreeProvider>
      <WhalesProvider>
        <DrawerProvider>
          <Pedigree />
        </DrawerProvider>
      </WhalesProvider>
    </PedigreeProvider>
  );
};

export default PedigreePage;
