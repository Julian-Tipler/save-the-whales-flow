import {
  Box,
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
import { Card } from "../../components/Card";
import { Whale } from "../../../db/Types/Entities";

export function WhalesIndex({ whales }: { whales: Whale[] }) {
  return (
    <Card overflowY="auto">
      <Table variant="simple">
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
        <TableCaption>Whales in this Pedigree</TableCaption>
      </Table>
    </Card>
  );
}
