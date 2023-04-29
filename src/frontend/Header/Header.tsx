import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import AuthContext from "../Auth/context/AuthContext";

export const Header = () => {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <div>Save the whales</div>
      <Button onClick={() => logout()}>Logout</Button>
    </>
  );
};
