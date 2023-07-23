import { useDrawerContext } from "../context/DrawerContext";
import { useWhalesContext } from "../context/WhalesContext";
import { Whale } from "../../../../db/Types/Entities";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../auth/context/AuthContext";
import { Box, Drawer, DrawerContent, Text } from "@chakra-ui/react";
import { WhaleForm } from "../../../cards/WhaleCard/WhaleForm";
import WhaleDetails from "../../../cards/WhaleCard/WhaleDetails";
import { WhaleCard } from "../../../cards/WhaleCard/WhaleCard";
import { validateWhale } from "../../../cards/WhaleCard/validation/validateWhale";

export const WhaleDrawer = () => {
  const { whaleForm, setWhaleForm } = useDrawerContext();
  const { whales, setWhales } = useWhalesContext();
  const { admin } = useAuthContext();

  if (!whaleForm) return null;

  const handleSubmit =
    ({
      whaleFormData,
      setErrors,
      setEditMode,
    }: {
      whaleFormData: any;
      setErrors: Function;
      setEditMode: Function;
    }) =>
    () => {
      const errors = validateWhale(whaleFormData);
      if (errors.length) {
        setErrors(errors);
        return;
      }
      const newWhales = whales.map((whale: Whale) => {
        if (whale.id === whaleForm.id) {
          return whaleFormData;
        }
        return whale;
      });

      setWhaleForm(null);
      setWhales(newWhales);
    };
  // TODO problem no id for form whale

  if (!whaleForm) return null;
  return (
    <Drawer
      isOpen={!!whaleForm}
      onClose={() => setWhaleForm(null)}
      placement="right"
    >
      {/* <DrawerOverlay /> */}
      <DrawerContent color={"black"} padding={"10px"}>
        <Box>
          <WhaleCard
            whale={whaleForm}
            handleSubmit={handleSubmit}
            justContent={true}
          />
        </Box>
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
