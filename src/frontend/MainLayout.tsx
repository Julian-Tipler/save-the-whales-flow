import { Grid, GridItem } from "@chakra-ui/react";
import { NavigationSidebar } from "./Navigation/NavigationSidebar";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import React from "react";
import PedigreePage from "./Pedigree";
import WhaleDetailsPage from "./WhaleDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PedigreePage />,
    children: [],
  },
  { path: "whales/:whaleId", element: <WhaleDetailsPage /> },
  { path: "login", element: <div>login</div> },
]);

export const MainLayout = () => {
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
        bg="orange.300"
        area={"header"}
        display={"flex"}
        padding={"10px"}
        alignItems={"center"}
      >
        Save The Whales!
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"} padding={"15px"}>
        <NavigationSidebar />
        Navigation
      </GridItem>
      <GridItem
        pl="2"
        bg="green.300"
        area={"main"}
        minHeight={"100vh"}
        padding={"30px"}
        width={"100%"}
      >
        <RouterProvider router={router} />
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};
