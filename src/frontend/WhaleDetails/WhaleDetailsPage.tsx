import React from "react";
import { WhaleDetails } from "./WhaleDetails";
import { WhaleProvider } from "./Context/WhaleContext";

const PedigreePage = () => {
  return (
    <WhaleProvider>
      <WhaleDetails />
    </WhaleProvider>
  );
};
export default PedigreePage;
