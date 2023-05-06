import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  Input,
  Flex,
} from "@chakra-ui/react";

export const WhaleDetailsForm = ({
  whale,
  setEditMode,
}: {
  whale: any;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [died, setDied] = useState("");

  useEffect(() => {
    setName(whale.name);
    setBorn(whale.born);
    setDied(whale.died);
  }, []);

  return (
    <Card>
      <CardHeader>Whale Details</CardHeader>
      <CardBody>
        <Flex>
          <Text width={"80px"}>ID: </Text>
          <Text>{whale.id}</Text>
        </Flex>
        <Flex>
          <Text width={"80px"}>Name: </Text>
          <Input value={name} onChange={handleOnChange(setName)} />
        </Flex>
        <Flex>
          <Text width={"80px"}>Born: </Text>
          <Input value={whale.born} onChange={handleOnChange(setBorn)} />
        </Flex>
        <Flex>
          <Text width={"80px"}>Died: </Text>
          <Input value={whale.died} onChange={handleOnChange(setDied)} />
        </Flex>
      </CardBody>
      <Flex>
        <Button
          onClick={() =>
            console.log({
              name,
              born,
              died,
            })
          }
        >
          Save
        </Button>
        <Button onClick={() => setEditMode(false)}>Cancel</Button>
      </Flex>
    </Card>
  );
};

export const handleOnChange = (setState: any) => {
  return (e: any) => {
    setState(e.target.value);
  };
};
