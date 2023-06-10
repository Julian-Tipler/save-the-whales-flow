import { useSidebarContext } from "../context/SidebarContext";
import { Drawer, DrawerContent } from "@chakra-ui/react";
import { WhaleDetailsForm } from "../../../Whales/WhaleDetailsForm";
import { usePedigreeContext } from "../context/PedigreeContext";

export const Sidebar = () => {
  const { whale, setWhale } = useSidebarContext();
  const { setNodes } = usePedigreeContext();

  const handleSubmit = ({ formData }: { formData: any }) => {
    setWhale(null);
    setNodes((nodes) => {
      const newNodes = nodes.map((node) => {
        if (node.id === formData.id) {
          return { ...node, data: { ...node.data, whale: formData } };
        }
        return node;
      });
      return newNodes;
    });
  };

  if (!whale) return null;
  return (
    <Drawer isOpen={!!whale} onClose={() => {}} placement="right">
      {/* <DrawerOverlay /> */}
      <DrawerContent>
        <WhaleDetailsForm
          whale={whale}
          setEditMode={null as any}
          handleSubmit={handleSubmit}
        />
      </DrawerContent>
    </Drawer>
  );
};
