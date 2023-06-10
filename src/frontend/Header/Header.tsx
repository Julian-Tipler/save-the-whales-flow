import React, { useContext } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import AuthContext from "../Auth/context/AuthContext";
import logo from "../../images/save-the-whales-logo.png"; // Import the image file

export const Header = () => {
  const { logout, loggedIn } = useContext(AuthContext);
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <img
        src={logo}
        alt="Save the whales logo"
        style={{ height: "100%", borderRadius: "5px" }}
      />
      <Button onClick={() => logout()}>{loggedIn ? "Logout" : "Login"}</Button>
    </Flex>
  );
};
