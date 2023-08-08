import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

export const Splash = () => {
  return (
    <Flex
      height={"100vh"}
      width={"100vw"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text color="text.secondary" fontSize={"9xl"}>
        69
      </Text>
      <Text color="text.secondary" fontSize={"5xl"}>
        Southern Resident killer whales remain in the wild
      </Text>
      <Button backgroundColor="text.secondary">Learn more</Button>
    </Flex>
  );
};
