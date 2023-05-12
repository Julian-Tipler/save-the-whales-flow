import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { NavigationSidebar } from "./Navigation/NavigationSidebar";

import { BodyRouter } from "./Router/BodyRouter";
import { Header } from "./Header/Header";

export const Layout = () => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"75px 1fr 100px"}
      gridTemplateColumns={"300px 1fr"}
      w="100vw"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem
        pl="2"
        bg={"blue.400"}
        area={"header"}
        display={"flex"}
        padding={"10px"}
        alignItems={"center"}
      >
        <Header />
      </GridItem>
      <GridItem pl="2" bg="gray.300" area={"nav"} padding={"15px"}>
        <NavigationSidebar />
      </GridItem>
      <GridItem
        pl="2"
        bg="blue.100"
        area={"main"}
        minHeight={"100vh"}
        padding={"30px"}
        width={"100%"}
      >
        <BodyRouter />
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}></GridItem>
    </Grid>
  );
};
