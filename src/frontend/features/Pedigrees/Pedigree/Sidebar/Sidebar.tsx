import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSidebarContext } from "../context/SidebarContext";
import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { WhaleDetailsForm } from "../../../Whales/WhaleDetailsForm";
import { usePedigreeContext } from "../context/PedigreeContext";

export const Sidebar = () => {
  const { whale } = useSidebarContext();
  const { setNodes } = usePedigreeContext();

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

export const handleSubmit = ({
  id,
  updateWhaleResolver,
  whaleFormData,
  setErrors,
  setEditMode,
}: any) => {
  return async () => {
    const errors = await updateWhaleResolver({
      id: id,
      whaleFormData: whaleFormData,
    });
    if (errors.length) {
      setErrors(errors);
    } else {
      setEditMode(false);
    }
  };
};
