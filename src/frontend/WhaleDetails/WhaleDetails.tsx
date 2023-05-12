import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import WhaleContext from "./context/WhaleContext";
import { WhaleDetailsForm } from "./WhaleDetailsForm";

export const WhaleDetails = () => {
  const [editMode, setEditMode] = React.useState(false);
  const { whale } = useContext(WhaleContext);

  if (!whale) return <div>Loading...</div>;
  const status = !whale.died;

  if (editMode) {
    return <WhaleDetailsForm whale={whale} setEditMode={setEditMode} />;
  }

  return (
    <Card>
      <CardHeader>Whale Details</CardHeader>
      <CardBody>
        <Flex padding={"4px"}>
          <Text width={"140px"}>Identification: </Text>
          <Text>{whale.identification}</Text>
        </Flex>
        <Flex padding={"4px"}>
          <Text width={"140px"}>Status: </Text>
          <Text>{status ? "Alive" : "Deceased"}</Text>
        </Flex>
        <Flex padding={"4px"}>
          <Text width={"140px"}>Name: </Text>
          <Text>{whale.name}</Text>
        </Flex>
        <Flex padding={"4px"}>
          <Text width={"140px"}>Born: </Text>
          <Text>{whale.born}</Text>
        </Flex>
        <Flex padding={"4px"}>
          <Text width={"140px"}>Died: </Text>
          <Text>{whale.died}</Text>
        </Flex>
        <Flex padding={"4px"}>
          <Text width={"140px"}>Notes: </Text>
          <Text>{whale.notes}</Text>
        </Flex>
      </CardBody>
      <Button onClick={() => setEditMode(true)}>Edit</Button>
    </Card>
  );
};
