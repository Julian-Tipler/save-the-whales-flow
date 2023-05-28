import React from "react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";

import PedigreesIndexPage from "../Pedigrees/PedigreesIndex";
import PedigreePage from "../Pedigrees/Pedigree";
import WhaleDetailsPage from "../Whales";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PedigreesIndexPage />,
  },
  {
    path: "pedigrees/:id",
    element: <PedigreePage />,
  },
  { path: "whales/:id", element: <WhaleDetailsPage /> },
]);

export const BodyRouter = () => {
  return <RouterProvider router={router} />;
};
