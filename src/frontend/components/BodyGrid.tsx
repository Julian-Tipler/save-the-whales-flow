import { Grid } from "@chakra-ui/react";

export const BodyGrid = ({
  children,
  numRows = 8,
  numCols = 4,
}: {
  children: any;
  numRows?: number;
  numCols?: number;
}) => {
  return (
    <Grid
      templateRows={`repeat(${numRows}, 200px)`}
      templateColumns={`repeat(${numCols}, 1fr)`}
      gap={4}
    >
      {children}
    </Grid>
  );
};
