import React from "react";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import WhaleDetailsPage from "./frontend/WhaleDetails";
import PedigreePage from "./frontend/Pedigree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PedigreePage />,
    children: [],
  },
  { path: "whales/:whaleId", element: <WhaleDetailsPage /> },
  { path: "login", element: <div>login</div> },
]);

function App() {
  return (
    <ChakraProvider>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={"50px 1fr 30px"}
          gridTemplateColumns={"150px 1fr"}
          h="200px"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" bg="orange.300" area={"header"}>
            Header
          </GridItem>
          <GridItem pl="2" bg="pink.300" area={"nav"}>
            Nav
          </GridItem>
          <GridItem pl="2" bg="green.300" area={"main"}>
            <div style={{ padding: "15px" }}>
              <RouterProvider router={router} />
            </div>
            Main
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={"footer"}>
            Footer
          </GridItem>
        </Grid>
      </div>
    </ChakraProvider>
  );
}

export default App;
