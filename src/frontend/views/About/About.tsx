import React from "react";
import { Card } from "../../components/Card";
import { Box, Text } from "@chakra-ui/react";

export function About() {
  return (
    <Card title="About">
      <Text>
        A public repository of information on an endangered population of
        killer whales resident to the coastal eastern North Pacific Ocean, the
        Southern Residents. Subject to ongoing monitoring since 1976, Southern
        Resident killer whales (currently numbering just 75 living animals) are
        severely impacted by anthropogenic activity, including reduction of
        their preferred prey, severe chemical and acoustic pollution, and
        historical captures for the aquarium industry. Synthesizing census
        information from multiple sources in a succinct, engaging format, this
        website enables full visualization of the decline of this icon of the
        Pacific Northwest like never before, emphasizing the need for immediate
        and sweeping conservation action.
      </Text>
    </Card>
  );
}
