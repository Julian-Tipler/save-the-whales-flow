import React from "react";
import { PedigreePage } from "./frontend/Pedigree/PedigreePage";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PedigreePage />,
  },
  { path: "whales", element: <div>whales</div> },
  { path: "login", element: <div>login</div> },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
