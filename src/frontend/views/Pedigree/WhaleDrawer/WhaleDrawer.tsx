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
  Flex,
  Text,
} from "@chakra-ui/react";
import { validateWhale } from "../../../cards/WhaleCard/validation/validateWhale";
import { WhaleDrawerShell } from "./unused/WhaleDrawerShell";
import { WhaleDrawerContent } from "./WhaleDrawerContent";

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
      <DrawerContent color={"text.primary"} borderRadius={"4px"}>
        <DrawerHeader>
          <Flex alignItems={"flex-end"}>
            <Text marginRight={"4px"}>{formWhale.identification}</Text>
            <Link to={`/whales/${formWhale?.id}`}>
              <Text
                color={"#0000FF"}
                textDecoration={"underline"}
                cursor={"pointer"}
                fontSize={"sm"}
              >
                {`(Details)`}
              </Text>
            </Link>
          </Flex>
        </DrawerHeader>
        <Divider />
        <DrawerBody padding={"10px"}>
          <Box>
            <WhaleDrawerContent whale={formWhale} />
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
