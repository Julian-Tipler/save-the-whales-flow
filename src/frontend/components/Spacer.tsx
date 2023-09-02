
import { Box as ChakraBox } from "@chakra-ui/react";

enum Sizes {
  xxs = "2px",
  xs = "4px",
  sm = "8px",
  md = "16px",
  lg = "32px",
  xl = "64px",
}

export const Spacer = ({ size = Sizes.md }: { size?: Sizes }) => {
  return <ChakraBox height={size} />;
};
