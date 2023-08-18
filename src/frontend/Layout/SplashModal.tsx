import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import "./SplashModal.css";
import { useNavigate } from "react-router-dom";

export const SplashModal = () => {
  const [isFadingOut, setIsFadingOut] = useState(
    localStorage.hasVisited === "true"
  );

  const navigate = useNavigate();
  const onClose = () => {
    navigate("/pods/3KMIIoqRyWVhr8x8vABb");
    setIsFadingOut(true);
    localStorage.setItem("hasVisited", "true");
  };
  return (
    <Modal isOpen={!isFadingOut} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent className={isFadingOut ? "slow-fade-modal-content" : ""}>
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
