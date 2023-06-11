import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Text,
  Button,
  Input,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useWhaleContext } from "../context/WhaleContext";
import { Whale } from "../../../../db/Types/Entities";

export const WhaleDetailsForm = ({
  whale,
  setEditMode,
  handleSubmit,
}: {
  whale: Whale;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: Function;
}) => {
  const [errors, setErrors] = useState<any>([]);
  const { updateWhaleResolver } = useWhaleContext();
  const [identification, setIdentification] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [born, setBorn] = useState("");
  const [died, setDied] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setIdentification(whale.identification || "");
    setName(whale.name || "");
    setGender(whale.gender || "");
    setBorn(whale.born || "");
    setDied(whale.died || "");
    setNotes(whale.notes || "");
  }, []);

  return (
    <Card
      padding={"16px"}
      borderRadius={"8px"}
      boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.1)"}
    >
      <CardBody>
        <Flex marginBottom={"8px"}>
          <Text width={"140px"} fontWeight={"bold"}>
            Identification:
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
          <Input
            value={gender}
            onChange={handleOnChange(setGender)}
            borderRadius={"4px"}
          />
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
      </CardBody>
      <Flex justifyContent={"center"} marginTop={"16px"}>
        <Button
          onClick={() =>
            handleSubmit({
              formData: {
                id: whale.id,
                identification,
                name,
                gender,
                born,
                died,
                notes,
              },
            })
          }
          marginRight={"8px"}
          borderRadius={"4px"}
        >
          Update
        </Button>
        <Button
          onClick={() => setEditMode(false)}
          borderRadius={"4px"}
          variant={"outline"}
        >
          Cancel
        </Button>
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

// export const handleSubmit = ({
//   id,
//   whaleFormData,
//   updateWhaleResolver,
//   setErrors,
//   setEditMode,
// }: any) => {
//   return async () => {
//     const errors = await updateWhaleResolver({
//       id: id,
//       whaleFormData: whaleFormData,
//     });
//     if (errors.length) {
//       setErrors(errors);
//     } else {
//       setEditMode(false);
//     }
//   };
// };
