import React from "react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import PedigreePage from "../Pedigrees/Pedigree";
import WhaleDetailsPage from "../Whales";

const router = createBrowserRouter([
  {
    path: "pedigrees",
    element: <PedigreePage />,
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
