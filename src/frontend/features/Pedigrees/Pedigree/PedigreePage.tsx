import { Pedigree } from "./Pedigree";
import { PedigreeProvider } from "./context/PedigreeContext";
import { SidebarProvider } from "./context/SidebarContext";

const PedigreePage = () => {
  return (
    <PedigreeProvider>
      <SidebarProvider>
        <Pedigree />
      </SidebarProvider>
    </PedigreeProvider>
  );
};

export default PedigreePage;
