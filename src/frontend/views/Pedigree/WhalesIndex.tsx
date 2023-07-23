import { Text } from "@chakra-ui/react";
import { BodyCard } from "../../components/BodyCard";
import { Whale } from "../../../db/Types/Entities";

export function WhalesIndex({ whales }: { whales: Whale[] }) {
  return (
    <BodyCard>
      <Text>WhalesIndex</Text>
    </BodyCard>
  );
}
