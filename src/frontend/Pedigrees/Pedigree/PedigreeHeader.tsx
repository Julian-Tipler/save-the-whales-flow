import { Heading } from "@chakra-ui/react";
import React from "react";

export const PedigreeHeader = (name: string) => {
  return (
    <Heading as="h4" size="md">
      {name}
    </Heading>
  );
};
