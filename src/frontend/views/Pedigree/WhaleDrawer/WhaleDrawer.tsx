import { useDrawerContext } from "../context/DrawerContext";
import { useWhalesContext } from "../context/WhalesContext";
import { Whale } from "../../../../db/Types/Entities";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../Auth/context/AuthContext";
import { Drawer, DrawerContent, Text } from "@chakra-ui/react";
import { WhaleForm } from "../../Whale/WhaleForm";
import WhaleDetails from "../../Whale/WhaleDetails";

export const WhaleDrawer = () => {
  const { whaleForm, setWhaleForm } = useDrawerContext();
  const { whales, setWhales } = useWhalesContext();
  const { admin } = useAuthContext();

  if (!whaleForm) return null;

  const handleSubmit = ({
    formData,
    setErrors,
    setEditMode,
  }: {
    formData: any;
    setErrors: Function;
    setEditMode: Function;
  }) => {
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
          <WhaleForm
            whale={whaleForm}
            setClose={() => setWhaleForm(null)}
            handleSubmit={handleSubmit}
          />
        ) : (
          <WhaleDetails whale={whaleForm} />
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
