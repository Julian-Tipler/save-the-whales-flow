import { Pedigree } from "./Pedigree";
import { PedigreeProvider } from "./context/PedigreeContext";
import { SidebarProvider } from "./context/SidebarContext";
import { WhalesProvider } from "./context/WhalesContext";

const PedigreePage = () => {
  return (
    <PedigreeProvider>
      <WhalesProvider>
        <SidebarProvider>
          <Pedigree />
        </SidebarProvider>
      </WhalesProvider>
    </PedigreeProvider>
  );
};

export default PedigreePage;
