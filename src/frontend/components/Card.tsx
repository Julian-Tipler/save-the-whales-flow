import {
  Box,
  BoxProps,
  CardBody,
  CardHeader,
  Card as ChakraCard,
} from "@chakra-ui/react";
import React from "react";

interface CardProps extends BoxProps {
  title?: string;
  children: React.ReactNode;
}

export function Card({ title, children, ...props }: CardProps) {
  return (
    <ChakraCard
      h="100%"
      w="100%"
      minWidth={"300px"}
      border="1px solid"
      borderColor={"brand.border"}
      backgroundColor={"brand.cardBackground"}
      {...props}
    >
      <CardHeader
        color={"text.primary"}
        fontWeight={600}
        fontSize={"xl"}
        paddingBottom={0}
      >
        {title}
      </CardHeader>
      <CardBody overflow={"hidden"}>
        <Box height={"100%"} overflow={"scroll"}>
          {children}
        </Box>
      </CardBody>
    </ChakraCard>
  );
}
