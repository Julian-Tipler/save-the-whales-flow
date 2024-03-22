import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useAuthContext } from "../../auth/context/AuthContext";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { loading } = useAuthContext();
  const { pathname } = useLocation();
  const cleanedPathName = (
    pathname.replace("/", "").charAt(0).toUpperCase() +
    pathname.replace("/", "").slice(1)
  )
    .replace(/\/[^/]+$/, "")
    .replace("/", "");
  if (loading) return null;
  return (
    <Flex
      justifyContent={"space-between"}
      gap={"10px"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <Heading size={"md"} fontWeight={600}>
        {cleanedPathName}
      </Heading>
      <Box className="right-side-header" display={"flex"}>
        <Text mr={"5px"}>Developer Links: </Text>
        <a
          href="https://github.com/Julian-Tipler"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            target="_blank"
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
            className="fa-lg"
            icon={faLinkedin}
            width={"20px"}
          ></FontAwesomeIcon>
        </a>
      </Box>
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
