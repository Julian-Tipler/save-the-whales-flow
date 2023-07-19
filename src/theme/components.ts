import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "./colors";

const CardBody = defineStyleConfig({
  baseStyle: {
    backgroundColor: "#21262d",
    fontWeight: "bold",
    border: "1px solid red",
  },
});

const Text = defineStyleConfig({
  baseStyle: {
    color: colors.text.primary,
  },
});

const Heading = defineStyleConfig({
  baseStyle: {
    color: colors.text.primary,
  },
});

const Button = defineStyleConfig({
  baseStyle: {
    color: colors.text.primary,
  },
});

const NavLink = defineStyleConfig({
  baseStyle: {
    color: colors.text.primary,
  },
});

export const components = {
  CardBody,
  Text,
  Heading,
  Button,
  NavLink,
};
