import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const SplashModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <Flex
          height={"100vh"}
          width={"100vw"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text color="text.secondary" fontSize={"9xl"}>
            75
          </Text>
          <Text color="text.secondary" fontSize={"5xl"}>
            Southern Resident killer whales remain in the wild
          </Text>
          <Button backgroundColor="text.secondary" onClick={onClose}>
            Learn More
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
