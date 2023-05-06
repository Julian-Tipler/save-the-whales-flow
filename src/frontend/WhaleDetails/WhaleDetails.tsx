import React, { useContext } from "react";
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

export const WhaleDetails = () => {
  const [editMode, setEditMode] = React.useState(false);
  const { whale, id } = useContext(WhaleContext);

  if (!whale) return <div>Loading...</div>;

  const status = !whale.died
  if (editMode) {
    // TODO edit form
    return (
      <Card>
        <Text>ID</Text>
        <Input size="md" placeholder="Name" />
        {status ? <Text>Alive</Text> : <Text>Deceased</Text>}
        <Input size="md" placeholder="Born" />
        <Input size="md" placeholder="Died" />
        <Input size="md" />
        <Input size="md" />

        <Button
          onClick={() =>
            console.log(
              "handle function which saves changes THEN saves editMode to false"
            )
          }
        >
          Save
        </Button>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>Whale Details</CardHeader>
      <CardBody>
        <Flex>
          <Text width={"80px"}>ID: </Text>
          <Text>{id}</Text>
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
