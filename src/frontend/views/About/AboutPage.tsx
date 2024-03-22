import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import { BodyGrid } from "../../components/BodyGrid";
import { About } from "./About";
import { ImageSection } from "./ImageSection";

export default function AboutPage() {
  return (
    <BodyGrid numRows={3}>
      <GridItem rowSpan={3} colSpan={{ base: 2, md: 2 }}>
        <About />
      </GridItem>
      <GridItem
        rowSpan={3}
        colSpan={{ base: 2, md: 2 }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ImageSection />
      </GridItem>
    </BodyGrid>
  );
}
