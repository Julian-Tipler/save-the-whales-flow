import { useSidebarContext } from "../context/SidebarContext";
import { Drawer, DrawerContent } from "@chakra-ui/react";
import { WhaleDetailsForm } from "../../../Whales/WhaleDetailsForm";
import { usePedigreeContext } from "../context/PedigreeContext";
import { useWhalesContext } from "../context/WhalesContext";
import { Whale } from "../../../../../db/Types/Entities";

export const Sidebar = () => {
  const { whaleForm, setWhaleForm } = useSidebarContext();
  const { whales, setWhales } = useWhalesContext();

  if (!whaleForm) return null;

  const handleSubmit = ({ formData }: { formData: any }) => {
    setWhaleForm(null);

    const newWhales = whales.map((whale: Whale) => {
      if (whale.id === whaleForm.id) {
        return formData;
      }
      return whale;
    });

    setWhales(newWhales);
  };

  if (!whaleForm) return null;
  return (
    <Drawer isOpen={!!whaleForm} onClose={() => {}} placement="right">
      {/* <DrawerOverlay /> */}
      <DrawerContent>
        <WhaleDetailsForm
          whale={whaleForm}
          setEditMode={null as any}
          handleSubmit={handleSubmit}
        />
      </DrawerContent>
    </Drawer>
  );
};
