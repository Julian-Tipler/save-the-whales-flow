import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PedigreesIndexPage from "../views/PedigreesIndex";
import PedigreePage from "../views/Pedigree";
import WhaleDetailsPage from "../views/Whale";
import { Layout } from "./Layout";
import AboutPage from "../views/About";
import { PersonalPage } from "../views/PersonalPage/PersonalPage";

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
      { path: "about", element: <AboutPage /> },
      { path: "personal-placeholder", element: <PersonalPage /> },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
