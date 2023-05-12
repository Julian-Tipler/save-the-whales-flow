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
import { Whale } from "../../db/Types/Entities";

export const WhaleDetailsForm = ({
  whale,
  setEditMode,
}: {
  whale: Whale;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [errors, setErrors] = useState<any>([]);
  const { updateWhaleResolver } = useContext(WhaleContext);
  const [identification, setIdentification] = useState("");
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [died, setDied] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setIdentification(whale.identification || "");
    setName(whale.name || "");
    setBorn(whale.born || "");
    setDied(whale.died || "");
    setNotes(whale.notes || "");
  }, []);

  return (
    <Card>
      <CardHeader>Whale Details</CardHeader>
      <CardBody>
        <Flex>
          <Text width={"140px"}>Identification: </Text>
          <Input
            value={identification}
            onChange={handleOnChange(setIdentification)}
          />
        </Flex>
        <Flex>
          <Text width={"140px"}>Name: </Text>
          <Input value={name} onChange={handleOnChange(setName)} />
        </Flex>
        <Flex>
          <Text width={"140px"}>Born: </Text>
          <Input value={born} onChange={handleOnChange(setBorn)} />
        </Flex>
        <Flex>
          <Text width={"140px"}>Died: </Text>
          <Input value={died} onChange={handleOnChange(setDied)} />
        </Flex>
        <Flex>
          <Text width={"140px"}>Notes: </Text>
          <Input value={notes} onChange={handleOnChange(setNotes)} />
        </Flex>
        <Box>
          {errors.map((error: String, i: Number) => {
            return (
              <Text color={"red"} key={`error-${i}`}>
                {error}
              </Text>
            );
          })}
        </Box>
      </CardBody>
      <Flex>
        <Button
          onClick={handleSubmit({
            updateWhaleResolver,
            whaleFormData: { name, born, died, notes },
            setErrors,
            setEditMode,
          })}
        >
          update
        </Button>
        <Button onClick={() => setEditMode(false)}>Cancel</Button>
      </Flex>
    </Card>
  );
};

export const handleOnChange = (
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
};

export const handleSubmit = ({
  updateWhaleResolver,
  whaleFormData,
  setErrors,
  setEditMode,
}: any) => {
  return async () => {
    const errors = await updateWhaleResolver(whaleFormData);
    if (errors.length) {
      setErrors(errors);
    } else {
      setEditMode(false);
    }
  };
};
