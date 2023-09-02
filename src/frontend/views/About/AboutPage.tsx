import { GridItem, Text } from "@chakra-ui/react";
import { BodyGrid } from "../../components/BodyGrid";
import { About } from "./About";

export default function AboutPage() {
  return (
    <BodyGrid>
      <GridItem rowSpan={2} colSpan={{ base: 2, md: 2 }}>
        <About />
      </GridItem>
    </BodyGrid>
  );
}
