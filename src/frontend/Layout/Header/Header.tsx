import React, { useContext } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useAuthContext } from "../../auth/context/AuthContext";
import logo from "../../images/save-the-whales-logo.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  const { loading } = useAuthContext();
  if (loading) return null;
  return (
    <Flex
      justifyContent={"flex-end"}
      gap={"10px"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <a
        href="https://github.com/Julian-Tipler"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          target="_blank"
          rel="noopener noreferrer"
          className="fa-lg"
          icon={faGithub}
          width={"20px"}
        ></FontAwesomeIcon>
      </a>
      <a
        href="https://www.linkedin.com/in/julian-t-87a2a0a4/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          target="_blank"
          rel="noopener noreferrer"
          className="fa-lg"
          icon={faLinkedin}
          width={"20px"}
        ></FontAwesomeIcon>
      </a>
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
