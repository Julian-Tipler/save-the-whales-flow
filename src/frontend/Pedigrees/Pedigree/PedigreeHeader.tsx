import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import React, { useContext, useEffect } from "react";
import PedigreeContext from "./context/PedigreeContext";

export const PedigreeHeader = ({ name }: { name: string | undefined }) => {
  const { updatePedigreeDetailsResolver, saveLoading } =
    useContext(PedigreeContext);

  const [editMode, setEditMode] = React.useState(false);
  const [pedigreeName, setPedigreeName] = React.useState(name);

  const handleKeyDown = async (event: any) => {
    if (event.key === "Enter") {
      await updatePedigreeDetailsResolver({ data: { name: pedigreeName } });
      setEditMode(false);
    }
  };

  useEffect(() => {
    setPedigreeName(name);
  }, [editMode]);

  return editMode ? (
    <Input
      value={pedigreeName}
      onChange={(e) => setPedigreeName(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  ) : (
    <Flex gap={"2"} alignItems={"center"}>
      <Heading as="h4" size="md">
        {name}
      </Heading>
      <Box onClick={() => setEditMode(true)}>
        <AiOutlineEdit />
      </Box>
    </Flex>
  );
};
