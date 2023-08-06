import { BoxProps, Card as ChakraCard } from "@chakra-ui/react";
import React from "react";

interface CardProps extends BoxProps {
  children: React.ReactNode;
}

export function Card({ children, ...props }: CardProps) {
  return (
    <ChakraCard
      h="100%"
      w="100%"
      minWidth={"300px"}
      p="20px"
      border="1px solid"
      borderColor={"brand.border"}
      backgroundColor={"brand.cardBackground"}
      {...props}
    >
      {children}
    </ChakraCard>
  );
}
