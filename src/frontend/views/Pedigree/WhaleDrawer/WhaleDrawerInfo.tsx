import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { Gender, Whale } from "../../../../db/Types/Entities";
import { useState } from "react";

type Field = {
  field: string;
  type: "text" | "dropdown" | "textBox";
  options?: string[];
};

type FormState = {
  [key: string]: string;
};

export const WhaleDrawerInfo = ({ whale }: { whale: Whale }) => {
  const fields: Field[] = [
    { field: "identification", type: "text" },
    { field: "name", type: "text" },
    {
      field: "gender",
      type: "dropdown",
      options: [...Object.values(Gender)],
    },
    { field: "born", type: "text" },
    { field: "died", type: "text" },
    { field: "notes", type: "textBox" },
  ];

  const initialFormState: FormState = fields.reduce((state, { field }) => {
    state[field] = "";
    return state;
  }, {} as FormState);

  const [editMode, setEditMode] = useState(false);
  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (field: string, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const returnField = ({ field, type }: { field: string; type: string }) => {
    switch (type) {
      case "text":
        return (
          <TextField label={field} value={whale[field]} editMode={editMode} />
        );
      case "dropdown":
        return (
          <DropdownField
            label={field}
            value={whale[field]}
            editMode={editMode}
          />
        );
      case "textBox":
        return (
          <TextBoxField
            label={field}
            value={whale[field]}
            editMode={editMode}
          />
        );
    }
  };

  return (
    <Flex flexDirection="column" justifyContent={"space-between"}>
      {fields.map(({ field, type }, i) => {
        return (
          <Box>
            {returnField({ field, type })}
            <Divider />
          </Box>
        );
      })}
      {editMode ? (
        <Flex>
          <Button>Submit</Button>
          <Button onClick={toggleEditMode}>Cancel</Button>
        </Flex>
      ) : (
        <Flex>
          <Button onClick={toggleEditMode}>Edit</Button>
        </Flex>
      )}
    </Flex>
  );
};

const FieldHeader = ({ label }: { label: string }) => (
  <Text flex={1}>{label}:</Text>
);

const TextField = ({
  label,
  value,
  editMode,
}: {
  label: string;
  value: string | undefined;
  editMode: boolean;
}) => (
  <Flex padding={"16px"}>
    {editMode ? (
      <div>edit</div>
    ) : (
      <>
        <FieldHeader label={label} />
        <Text flex={1}>{value}</Text>
      </>
    )}
  </Flex>
);

const DropdownField = ({
  label,
  value,
  editMode,
}: {
  label: string;
  value: string | undefined;
  editMode: boolean;
}) => (
  <Flex padding={"16px"}>
    {editMode ? (
      <div>edit</div>
    ) : (
      <>
        <FieldHeader label={label} />
        <Text flex={1}>{value}</Text>
      </>
    )}
  </Flex>
);

const TextBoxField = ({
  label,
  value,
  editMode,
}: {
  label: string;
  value: string | undefined;
  editMode: boolean;
}) => (
  <>
    {editMode ? (
      <div>edit</div>
    ) : (
      <Flex padding={"16px"} flexDirection={"column"}>
        <FieldHeader label={label} />
        <Text flex={1}>{value}</Text>
      </Flex>
    )}
  </>
);
