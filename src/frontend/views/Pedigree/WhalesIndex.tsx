import {
  List,
  ListItem,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BodyCard } from "../../components/BodyCard";
import { Whale } from "../../../db/Types/Entities";

export function WhalesIndex({ whales }: { whales: Whale[] }) {
  return (
    <BodyCard>
      <Table variant="simple">
        <TableCaption>Whales in this Pedigree</TableCaption>
        <Thead>
          <Tr>
            <Th>Status</Th>
            <Th>Name</Th>
            <Th>Gender</Th>
            <Th>Born</Th>
            <Th>Died</Th>
          </Tr>
        </Thead>
        <Tbody>
          {whales.map((whale: Whale, index: number) => (
            <Tr key={index}>
              <Td>{!whale.died ? "Alive" : "Deceased"}</Td>
              <Td>{whale.name}</Td>
              <Td>{whale.gender}</Td>
              <Td>{whale.born}</Td>
              <Td>{whale.died}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </BodyCard>
  );
}
