import {
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
import { Link } from "react-router-dom";

const tableCellStyle = {

};

export function WhalesIndex({ whales }: { whales: Whale[] }) {
  return (
    <Card overflowY="auto" title="Whales">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th style={tableCellStyle}>Id</Th>
            <Th style={tableCellStyle}>Name</Th>
            <Th style={tableCellStyle}>Status</Th>
            <Th style={tableCellStyle}>Gender</Th>
            <Th style={tableCellStyle}>Born</Th>
            <Th style={tableCellStyle}>Died</Th>
          </Tr>
        </Thead>
        <Tbody>
          {whales.map((whale: Whale, index: number) => (
            <Tr key={index}>
              <Td>
                <Link to={`/whales/${whale.id}`}>
                  <Text style={{ display: "inline" }}>
                    {whale.identification ? whale.identification : "<no id>"}
                  </Text>
                </Link>
              </Td>
              <Td style={tableCellStyle}>{whale.name}</Td>
              <Td style={tableCellStyle}>
                {!whale.died ? "Alive" : "Deceased"}
              </Td>
              <Td style={tableCellStyle}>{whale.gender}</Td>
              <Td style={tableCellStyle}>{whale.born}</Td>
              <Td style={tableCellStyle}>{whale.died}</Td>
            </Tr>
          ))}
        </Tbody>
        <TableCaption>Whales in this Pedigree</TableCaption>
      </Table>
    </Card>
  );
}
