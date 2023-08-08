import { Grid, GridItem } from "@chakra-ui/react";
import { NavigationSidebar } from "./Navigation/NavigationSidebar";

import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"5vh 1fr 5vh"}
      gridTemplateColumns={"300px 1fr"}
      w="100vw"
      color="text.primary"
      fontWeight="bold"
      minH="100vh"
      bg={"brand.background"}
    >
      <GridItem
        pl="2"
        area={"header"}
        display={"flex"}
        padding={"10px"}
        alignItems={"center"}
        borderBottom={"1px solid"}
        borderColor={"brand.border"}
        height={"5vh"}
        background={"transparent"}
      >
        <Header />
      </GridItem>
      <GridItem
        pl="2"
        area={"nav"}
        padding={"15px"}
        borderColor={"brand.border"}
      >
        <NavigationSidebar />
      </GridItem>
      <GridItem
        area={"main"}
        minHeight={"90vh"}
        width={"100%"}
        bg={"brand.bodyBackground"}
        overflow={"auto"}
      >
        <Outlet />
      </GridItem>
      <GridItem pl="2" bg="transparent" area={"footer"}></GridItem>
    </Grid>
  );
};
