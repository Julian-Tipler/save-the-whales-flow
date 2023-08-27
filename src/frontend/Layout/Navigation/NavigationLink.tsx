import { AccordionButton, Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

export default function NavigationLink({
  link,
  icon,
  text,
}: {
  link: string;
  icon: IconType;
  text: string;
}) {
  return (
    <AccordionButton padding={0}>
      <Link
        to={link}
        style={{
          display: "block",
          width: "100%",
          padding: "12px",
          paddingLeft: "16px",
        }}
      >
        <Flex alignItems={"center"}>
          <Icon
            mr="3"
            fontSize="20"
            _groupHover={{
              color: "text.primary",
            }}
            as={icon}
          />
          <Box as="span" flex="1" textAlign="left">
            {text}
          </Box>
        </Flex>
      </Link>
    </AccordionButton>
  );
}
