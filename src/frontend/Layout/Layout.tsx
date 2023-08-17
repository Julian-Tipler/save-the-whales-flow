import { Box, Grid, GridItem } from "@chakra-ui/react";
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
      color="blackAlpha.700"
      fontWeight="bold"
      minH="100vh"
    >
      <GridItem
        pl="2"
        area={"header"}
        display={"flex"}
        padding={"10px"}
        alignItems={"center"}
        bg={"brand.background"}
        borderBottom={"1px solid"}
        borderColor={"brand.border"}
      >
        <Header />
      </GridItem>
      <GridItem
        pl="2"
        area={"nav"}
        padding={"15px"}
        bg={"brand.background"}
        borderRight={"1px solid"}
        borderColor={"brand.border"}
      >
        <NavigationSidebar />
      </GridItem>
      <GridItem
        pl="2"
        area={"main"}
        padding={"20px"}
        width={"100%"}
        bg={"brand.bodyBackground"}
        overflow={"auto"}
        minHeight={"90vh"}
      >
        <Outlet />
      </GridItem>
      <GridItem pl="2" bg="brand.background" area={"footer"}>
        <Box bgColor={"orange"}>
          Footer
        </Box >
      </GridItem>
    </Grid>
  );
};
