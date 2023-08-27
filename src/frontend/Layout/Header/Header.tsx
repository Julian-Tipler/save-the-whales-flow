import React, { useContext } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useAuthContext } from "../../auth/context/AuthContext";
import logo from "../../images/save-the-whales-logo.png";

export const Header = () => {
  const { logout, setLoggingIn, admin, loading } = useAuthContext();
  if (loading) return null;
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      {/* <div></div>
      {/* <img
        src={logo}
        alt="Save the whales logo"
        style={{ height: "100%", borderRadius: "5px" }}
      /> */}
      {/* {admin ? (
        <Button onClick={() => logout()}>Logout</Button>
      ) : (
        <Button onClick={() => setLoggingIn(true)}>Admin</Button>
      )} */}
    </Flex>
  );
};
