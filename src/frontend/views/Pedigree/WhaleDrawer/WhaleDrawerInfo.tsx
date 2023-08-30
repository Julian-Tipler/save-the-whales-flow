import { Flex, Text } from "@chakra-ui/react";
import { Gender, Whale } from "../../../../db/Types/Entities";

const fields = [
  { field: "identification", type: "text" },
  { field: "name", type: "text" },
  { field: "gender", type: "dropdown", options: [...Object.values(Gender)] },
  { field: "born", type: "text" },
  { field: "died", type: "text" },
  { field: "notes", type: "textBox" },
  { field: "asdf", type: "lasdf" },
];

export const WhaleDrawerInfo = ({ whale }: { whale: Whale }) => {
  return (
    <Flex flexDirection="column" justifyContent={"space-between"}>
      {fields.map(({ field, type }, i) => {
        switch (type) {
          case "text":
            return (
              <TextField
                label={field}
                value={whale[field]}
                key={`field-${i}`}
              />
            );
          case "dropdown":
            return (
              <DropdownField
                label={field}
                value={whale[field]}
                key={`field-${i}`}
              />
            );
          case "textBox":
            return (
              <TextBoxField
                label={field}
                value={whale[field]}
                key={`field-${i}`}
              />
            );
        }
      })}
    </Flex>
  );
};

const FieldHeader = ({ label }: { label: string }) => <Text>{label}:</Text>;

const TextField = ({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) => (
  <Flex padding={"8px"}>
    <FieldHeader label={label} />
    <Text>{value}</Text>
  </Flex>
);

const DropdownField = ({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) => (
  <Flex padding={"8px"}>
    <FieldHeader label={label} />
    <Text>{value}</Text>
  </Flex>
);

const TextBoxField = ({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) => (
  <Flex padding={"8px"}>
    <FieldHeader label={label} />
    <Text>{value}</Text>
  </Flex>
);
