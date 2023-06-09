import { Grid, GridItem } from "@chakra-ui/react";
import { NavigationSidebar } from "../Navigation/NavigationSidebar";

import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";

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
      <GridItem pl="2" bg={"#E0EBF5"} area={"nav"} padding={"15px"}>
        <NavigationSidebar />
      </GridItem>
      <GridItem
        pl="2"
        area={"main"}
        minHeight={"100vh"}
        padding={"30px"}
        width={"100%"}
      >
        <Outlet />
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}></GridItem>
    </Grid>
  );
};
