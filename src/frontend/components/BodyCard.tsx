import { Card as ChakraCard } from "@chakra-ui/react";
import React from "react";

export function BodyCard({ children }: { children: React.ReactNode }) {
  return (
    <ChakraCard
      h="100%"
      w="100%"
      minWidth={"300px"}
      p="20px"
      border="1px solid"
      borderColor={"brand.border"}
      backgroundColor={"brand.cardBackground"}
    >
      {children}
    </ChakraCard>
  );
}
