import { colors } from "./colors";

export const styles = {
  global: {
    // styles for the `body`
    body: {
      backgroundColor: colors.brand.background,
      color: "#fff",
      overscrollBehavior: "none"
    },
    // styles for the `a`
    a: {
      _hover: {
        textDecoration: "underline",
      },
    },
  },
};
