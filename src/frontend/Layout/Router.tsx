import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PedigreesIndexPage from "../views/PedigreesIndex";
import PedigreePage from "../views/Pedigree";
import WhaleDetailsPage from "../views/Whale";
import { Layout } from "./Layout";
import { useState } from "react";
import { SplashModal } from "./SplashModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "pods/:id",
        element: <PedigreePage />,
      },
      { path: "pods", element: <PedigreesIndexPage /> },
      { path: "whales/:id", element: <WhaleDetailsPage /> },
    ],
  },
]);

export const Router = () => {
  const [isOpen, setIsOpen] = useState(localStorage.hasVisited !== "true");

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem("hasVisited", "true");
  };
  return (
    <>
      <SplashModal isOpen={isOpen} onClose={closeModal} />
      {!isOpen && <RouterProvider router={router} />}
    </>
  );
};
