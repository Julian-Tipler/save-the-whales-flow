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
  const { drawerWhale, setDrawerWhale } = useDrawerContext();
  const { whales, setWhales } = useWhalesContext();
  const { admin } = useAuthContext();

  if (!drawerWhale) return null;
  return (
    <Drawer
      isOpen={!!drawerWhale}
      onClose={() => setDrawerWhale(null)}
      placement="right"
    >
      <DrawerOverlay />
      <DrawerContent color={"text.primary"} borderRadius={"10px"}>
        <DrawerHeader>
          <Flex alignItems={"flex-end"}>
            <Text marginRight={"4px"}>{drawerWhale.identification}</Text>
            <Link to={`/whales/${drawerWhale?.id}`}>
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
            <WhaleDrawerContent
              whale={drawerWhale}
              setDrawerWhale={setDrawerWhale}
            />
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
