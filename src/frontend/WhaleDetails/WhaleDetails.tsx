import React, { useContext, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  Input,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
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
        <Flex>
          <Text width={"80px"}>ID: </Text>
          <Text>{whale.id}</Text>
        </Flex>
        <Flex>
          <Text width={"80px"}>Status: </Text>
          <Text>{status ? "Alive" : "Deceased"}</Text>
        </Flex>
        <Flex>
          <Text width={"80px"}>Name: </Text>
          <Text>{whale.name}</Text>
        </Flex>
        <Flex>
          <Text width={"80px"}>Born: </Text>
          <Text>{whale.born}</Text>
        </Flex>
        <Flex>
          <Text width={"80px"}>Died: </Text>
          <Text>{whale.died}</Text>
        </Flex>
      </CardBody>
      <Button onClick={() => setEditMode(true)}>Edit</Button>
    </Card>
  );
};
