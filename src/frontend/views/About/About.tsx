import React from "react";
import { Card } from "../../components/Card";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Spacer } from "../../components/Spacer";

export function About() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      padding={"20px"}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading>This site stores whale activity</Heading>
      <Spacer size={"lg"} />
      <Text>
        A public repository of information on an endangered population of killer
        whales resident to the coastal eastern North Pacific Ocean, the Southern
        Residents. Subject to ongoing monitoring since 1976, Southern Resident
        killer whales (currently numbering just 75 living animals) are severely
        impacted by anthropogenic activity, including reduction of their
        preferred prey, severe chemical and acoustic pollution, and historical
        captures for the aquarium industry. Synthesizing census information from
        multiple sources in a succinct, engaging format, this website enables
        full visualization of the decline of this icon of the Pacific Northwest
        like never before, emphasizing the need for immediate and sweeping
        conservation action.
      </Text>
    </Box>
  );
}
