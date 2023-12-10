import { Box, Flex, Text } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <Flex padding={"15px"} flexDirection={"column"} gap={"10px"}>
      <Text fontWeight={600}>About the developer:</Text>
      <Text>Julian Tipler</Text>
      <Text>tipler.julian@gmail.com</Text>
      <Flex gap={"10px"}>
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
      </Flex>
    </Flex>
  );
};

//   <Flex>
//   </Flex>;
