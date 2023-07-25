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
    <Flex flexDirection="column" justifyContent={"space-between"}>
      <Box>
        <Flex marginBottom={"8px"}>
          <Text width={"140px"} fontWeight={"bold"}>
            Id:
          </Text>
          <Input
            size={"sm"}
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
            size={"sm"}
            value={name}
            onChange={handleOnChange(setName)}
            borderRadius={"4px"}
          />
        </Flex>
        <Flex marginBottom={"8px"}>
          <Text width={"140px"} fontWeight={"bold"}>
            Gender:
          </Text>
          <Select
            size={"sm"}
            value={gender}
            onChange={handleOnChange(setGender)}
          >
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
            size={"sm"}
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
            size={"sm"}
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
            size={"sm"}
            value={notes}
            onChange={handleOnChange(setNotes)}
            borderRadius={"4px"}
          />
        </Flex>
      </Box>
      <Box height={"20px"} justifyContent={"center"}>
        <Text color={"red"}  textAlign={"center"}>
          {errors[0]}
        </Text>
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
          width={"100px"}
        >
          Update
        </Button>
        <Button
          onClick={() => setEditMode(false)}
          borderRadius={"4px"}
          variant={"outline"}
          width={"100px"}
        >
          Cancel
        </Button>
      </Flex>
    </Flex>
  );
};

export const handleOnChange = (
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  return (e: React.ChangeEvent<any>) => {
    setState(e.target.value);
  };
};
