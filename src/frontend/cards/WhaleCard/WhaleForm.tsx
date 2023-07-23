import React, { useEffect, useState } from "react";
import { Text, Button, Input, Flex, Box, Select } from "@chakra-ui/react";
import { useWhaleContext } from "../../views/Whale/context/WhaleContext";
import { Whale } from "../../../db/Types/Entities";

export const WhaleForm = ({
  whale,
  handleSubmit,
  setEditMode,
}: {
  whale: Whale;
  handleSubmit: Function;
  setEditMode: Function;
}) => {
  const [errors, setErrors] = useState<any>([]);
  const [identification, setIdentification] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState<"male" | "female" | "unknown">(
    "unknown"
  );
  const [born, setBorn] = useState("");
  const [died, setDied] = useState("");
  const [notes, setNotes] = useState("");
  useEffect(() => {
    setIdentification(whale.identification || "");
    setName(whale.name || "");
    setGender(whale.gender || "unknown");
    setBorn(whale.born || "");
    setDied(whale.died || "");
    setNotes(whale.notes || "");
  }, []);
  console.log("identification", identification, "name", name);
  return (
    <>
      <Flex marginBottom={"8px"}>
        <Text width={"140px"} fontWeight={"bold"}>
          Id:
        </Text>
        <Input
          value={identification}
          onChange={handleOnChange(setIdentification)}
          borderRadius={"4px"}
        />
      </Flex>
      <Flex marginBottom={"8px"}>
        <Text width={"140px"} fontWeight={"bold"}>
          Name:
        </Text>
        <Input
          value={name}
          onChange={handleOnChange(setName)}
          borderRadius={"4px"}
        />
      </Flex>
      <Flex marginBottom={"8px"}>
        <Text width={"140px"} fontWeight={"bold"}>
          Gender:
        </Text>
        <Select value={gender} onChange={handleOnChange(setGender)}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="unknown">unknown</option>
        </Select>
        {/* // value={gender}
            // onChange={handleOnChange(setGender)}
            // borderRadius={"4px"} */}
      </Flex>
      <Flex marginBottom={"8px"}>
        <Text width={"140px"} fontWeight={"bold"}>
          Born:
        </Text>
        <Input
          value={born}
          onChange={handleOnChange(setBorn)}
          borderRadius={"4px"}
        />
      </Flex>
      <Flex marginBottom={"8px"}>
        <Text width={"140px"} fontWeight={"bold"}>
          Died:
        </Text>
        <Input
          value={died}
          onChange={handleOnChange(setDied)}
          borderRadius={"4px"}
        />
      </Flex>
      <Flex marginBottom={"8px"}>
        <Text width={"140px"} fontWeight={"bold"}>
          Notes:
        </Text>
        <Input
          value={notes}
          onChange={handleOnChange(setNotes)}
          borderRadius={"4px"}
        />
      </Flex>
      <Box>
        {errors.map((error: any, i: number) => (
          <Text color={"red"} key={`error-${i}`} marginBottom={"4px"}>
            {error}
          </Text>
        ))}
      </Box>
      <Flex justifyContent={"center"} marginTop={"16px"}>
        <Button
          onClick={handleSubmit({
            whaleFormData: {
              id: whale.id,
              identification,
              name,
              gender,
              born,
              died,
              notes,
            },
            setErrors,
            setEditMode,
          })}
          marginRight={"8px"}
          borderRadius={"4px"}
        >
          Update
        </Button>
        {/* <Button
          onClick={() => setClose(false)}
          borderRadius={"4px"}
          variant={"outline"}
        >
          Cancel
        </Button> */}
      </Flex>
    </>
  );
};

export const handleOnChange = (
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  return (e: React.ChangeEvent<any>) => {
    setState(e.target.value);
  };
};
