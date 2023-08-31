import { useDrawerContext } from "../context/DrawerContext";
import { useWhalesContext } from "../context/WhalesContext";
import { Whale } from "../../../../db/Types/Entities";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../auth/context/AuthContext";
import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { validateWhale } from "../../../cards/WhaleCard/validation/validateWhale";
import { WhaleDrawerShell } from "./WhaleDrawerShell";
import { WhaleDrawerInfo } from "./WhaleDrawerInfo";

export const WhaleDrawer = () => {
  const { formWhale, setFormWhale } = useDrawerContext();
  const { whales, setWhales } = useWhalesContext();
  const { admin } = useAuthContext();

  if (!formWhale) return null;

  const handleSubmit =
    ({
      formWhaleData,
      setErrors,
      setEditMode,
    }: {
      formWhaleData: any;
      setErrors: Function;
      setEditMode: Function;
    }) =>
    () => {
      const errors = validateWhale(formWhaleData);
      if (errors.length) {
        setErrors(errors);
        return;
      }
      const newWhales = whales.map((whale: Whale) => {
        if (whale.id === formWhale.id) {
          return formWhaleData;
        }
        return whale;
      });

      setFormWhale(null);
      setWhales(newWhales);
    };

  if (!formWhale) return null;
  return (
    <Drawer
      isOpen={!!formWhale}
      onClose={() => setFormWhale(null)}
      placement="right"
    >
      <DrawerOverlay />
      <DrawerContent padding={"10px"} color={"text.primary"} borderRight={""}>
        <DrawerHeader>
          <Text>{formWhale.identification}</Text>
        </DrawerHeader>
        <Divider />
        <DrawerBody>
          <Box>
            <WhaleDrawerInfo whale={formWhale} />
          </Box>
          <Link to={`/whales/${formWhale?.id}`}>
            <Text
              color={"#0000FF"}
              textDecoration={"underline"}
              cursor={"pointer"}
            >
              Details
            </Text>
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
