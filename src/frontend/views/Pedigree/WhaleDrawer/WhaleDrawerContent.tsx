import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { Gender, Whale } from "../../../../db/Types/Entities";
import { ChangeEvent, useState } from "react";
import { Spacer } from "../../../components/Spacer";
import { validateWhale } from "../../../cards/WhaleCard/validation/validateWhale";
import { useWhalesContext } from "../context/WhalesContext";

type Field = TextField | DropdownField;

type TextField = {
  label: string;
  type: "text" | "textBox";
};

type DropdownField = {
  label: string;
  type: "dropdown";
  options: string[];
};

type FormState = {
  [key: string]: string;
};

const fields: Field[] = [
  { label: "identification", type: "text" },
  { label: "name", type: "text" },
  {
    label: "gender",
    type: "dropdown",
    options: [...Object.values(Gender)],
  },
  { label: "born", type: "text" },
  { label: "died", type: "text" },
  { label: "notes", type: "textBox" },
];

export const WhaleDrawerContent = ({
  whale,
  setDrawerWhale,
}: {
  whale: Whale;
  setDrawerWhale: React.Dispatch<React.SetStateAction<Whale | null>>;
}) => {
  //TODO need to map the incoming whale to the form state and fields.
  const initialFormState: FormState = fields.reduce((state, { label }) => {
    state[label] = whale[label] || "";
    return state;
  }, {} as FormState);

  const [editMode, setEditMode] = useState(false);
  const [formState, setFormState] = useState(initialFormState);

  // Handler for user changes to a field
  const createInputChange = (field: Field) => {
    const { label } = field;
    return (event: ChangeEvent<any>) =>
      setFormState((prevState) => ({
        ...prevState,
        [label]: event.target.value,
      }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setFormState(initialFormState);
  };

  const { whales, setWhales } = useWhalesContext();

  const createSubmit = () => {
    // const errors = validateWhale(formWhaleData);
    // if (errors.length) {
    //   setErrors(errors);
    //   return;
    // }
    const newWhales = whales.map((currWhale: Whale) => {
      if (currWhale.id === whale.id) {
        return { id: whale.id, ...formState };
      }
      return whale;
    });

    setDrawerWhale(null);
    setWhales(newWhales);
  };

  const returnField = (field: Field) => {
    const { label } = field;
    switch (field.type) {
      case "text":
        return (
          <TextField
            label={label}
            value={formState[label]}
            editMode={editMode}
            handleInputChange={createInputChange(field)}
          />
        );
      case "textBox":
        return (
          <TextBoxField
            label={field.label}
            value={formState[label]}
            editMode={editMode}
            handleInputChange={createInputChange(field)}
          />
        );
      case "dropdown":
        return (
          <DropdownField
            label={field.label}
            value={formState[label]}
            editMode={editMode}
            options={field.options as string[]}
            handleInputChange={createInputChange(field)}
          />
        );
    }
  };

  return (
    <Flex flexDirection="column" justifyContent={"space-between"}>
      <Flex alignItems={"center"} padding={"16px"}>
        <Text flex={1} fontSize={"xs"}>
          field
        </Text>
        <Text flex={1} fontSize={"xs"}>
          value
        </Text>
      </Flex>
      <Divider />
      {fields.map((field, i) => {
        return (
          <Box>
            {returnField(field)}
            <Divider />
          </Box>
        );
      })}
      <Spacer />
      {editMode ? (
        <Flex justifyContent={"space-around"}>
          <Button onClick={createSubmit}>Submit</Button>
          <Button onClick={toggleEditMode}>Cancel</Button>
        </Flex>
      ) : (
        <Flex justifyContent={"space-around"}>
          <Button onClick={toggleEditMode}>Edit</Button>
        </Flex>
      )}
    </Flex>
  );
};

const FieldHeader = ({ label }: { label: string }) => (
  <Text flex={1} color={"text.secondary"}>
    {label}:
  </Text>
);

//Fields
const TextField = ({
  label,
  value,
  editMode,
  handleInputChange,
}: {
  label: string;
  value: string | undefined;
  editMode: boolean;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <Flex padding={"16px"} height={16} alignItems={"center"}>
    <FieldHeader label={label} />
    {editMode ? (
      <Input onChange={handleInputChange} flex={1} value={value} />
    ) : (
      <Text flex={1}>{value}</Text>
    )}
  </Flex>
);

const TextBoxField = ({
  label,
  value,
  editMode,
  handleInputChange,
}: {
  label: string;
  value: string | undefined;
  editMode: boolean;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <>
    <Flex padding={"16px"} flexDirection={"column"}>
      <FieldHeader label={label} />
      {editMode ? (
        <Input onChange={handleInputChange} flex={1} value={value} />
      ) : (
        <Text flex={1}>{value}</Text>
      )}
    </Flex>
  </>
);

const DropdownField = ({
  label,
  value,
  editMode,
  options,
  handleInputChange,
}: {
  label: string;
  value: string | undefined;
  editMode: boolean;
  options: string[];
  handleInputChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <Flex padding={"16px"} height={16} alignItems={"center"}>
      <FieldHeader label={label} />
      {editMode ? (
        <Select flex={1} height={10} onChange={handleInputChange}>
          {options.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </Select>
      ) : (
        <>
          <Text flex={1}>{value}</Text>
        </>
      )}
    </Flex>
  );
};
