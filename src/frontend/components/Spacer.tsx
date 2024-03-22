import { Box as ChakraBox } from "@chakra-ui/react";

const sizes = {
  xxs: "2px",
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "36px",
  xxl: "48px",
  xxxl: "64px",
} as const;

type SizeKeys = keyof typeof sizes;

export const Spacer = ({ size = "md" }: { size?: SizeKeys }) => {
  return <ChakraBox height={sizes[size]} />;
};
