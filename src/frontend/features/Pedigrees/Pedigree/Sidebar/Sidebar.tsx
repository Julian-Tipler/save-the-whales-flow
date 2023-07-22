import { useDrawerContext } from "../context/DrawerContext";
import { Drawer, DrawerContent, Text } from "@chakra-ui/react";
import { WhaleDetailsForm } from "../../../../features/Whales/Whale/WhaleDetailsForm";
import { useWhalesContext } from "../context/WhalesContext";
import { Whale } from "../../../../../db/Types/Entities";
import { WhaleDetailsCard } from "../../../Whales/Whale/WhaleDetailsCard";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../Auth/context/AuthContext";

export const WhaleDrawer = () => {
  const { whaleForm, setWhaleForm } = useDrawerContext();
  const { whales, setWhales } = useWhalesContext();
  const { admin } = useAuthContext();

  if (!whaleForm) return null;

  const handleSubmit = ({ formData }: { formData: any }) => {
    const newWhales = whales.map((whale: Whale) => {
      if (whale.id === whaleForm.id) {
        return formData;
      }
      return whale;
    });

    setWhaleForm(null);
    setWhales(newWhales);
  };

  if (!whaleForm) return null;
  return (
    <Drawer
      isOpen={!!whaleForm}
      onClose={() => setWhaleForm(null)}
      placement="right"
    >
      {/* <DrawerOverlay /> */}
      <DrawerContent>
        {admin ? (
          <WhaleDetailsForm
            whale={whaleForm}
            setClose={() => setWhaleForm(null)}
            handleSubmit={handleSubmit}
          />
        ) : (
          <WhaleDetailsCard whale={whaleForm} />
        )}
        <Link to={`/whales/${whaleForm?.id}`}>
          <Text
            color={"#0000FF"}
            textDecoration={"underline"}
            cursor={"pointer"}
          >
            Details
          </Text>
        </Link>
      </DrawerContent>
    </Drawer>
  );
};
