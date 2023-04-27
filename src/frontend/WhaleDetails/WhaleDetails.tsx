import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Text,
  Button,
} from "@chakra-ui/react";

export const WhaleDetails = () => {
  const [editMode, setEditMode] = React.useState(false);

  if (editMode) {
    // TODO edit form
    return (
      <Card>
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
        <Text>ID</Text>
        <Text>Name</Text>
        <Text>Status</Text>
      </CardBody>
      <Button onClick={() => setEditMode(true)}>Edit</Button>
    </Card>
  );
};
