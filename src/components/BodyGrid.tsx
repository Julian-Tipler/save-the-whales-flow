import { Grid } from "@chakra-ui/react";
import React, { ReactComponentElement } from "react";

export const BodyGrid = ({ children }: { children: any }) => {
  return (
    <Grid
      h="800px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
      {children}
    </Grid>
  );
};
