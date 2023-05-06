import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  Input,
  Flex,
  Box,
} from "@chakra-ui/react";
import WhaleContext from "./context/WhaleContext";

export const WhaleDetailsForm = ({
  whale,
  setEditMode,
}: {
  whale: any;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [errors, setErrors] = useState<any>([]);
  const { saveWhale } = useContext(WhaleContext);
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [died, setDied] = useState("");
  const [notes, setNotes] = useState("");

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
          <Input value={born} onChange={handleOnChange(setBorn)} />
        </Flex>
        <Flex>
          <Text width={"80px"}>Died: </Text>
          <Input value={died} onChange={handleOnChange(setDied)} />
        </Flex>
        <Flex>
          <Text width={"80px"}>Notes: </Text>
          <Input value={notes} onChange={handleOnChange(setNotes)} />
        </Flex>
      </CardBody>
      <Box>
        {errors.map((error: String) => {
          return <Text>{error}</Text>;
        })}
      </Box>
      <Flex>
        <Button
          onClick={handleSubmit({
            saveWhale,
            whale: { name, born, died, notes },
            setErrors,
            setEditMode,
          })}
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

export const handleSubmit = ({
  saveWhale,
  whale,
  setErrors,
  setEditMode,
}: any) => {
  return async () => {
    const errors = await saveWhale(whale);
    if (errors.length) {
      setErrors(errors);
    } else {
      setEditMode(false);
    }
  };
};
