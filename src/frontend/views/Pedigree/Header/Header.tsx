import { Box, Flex, Heading, Input, Spinner } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import React, { useEffect } from "react";
import { usePedigreeContext } from "../context/PedigreeContext";
import { useAuthContext } from "../../../auth/context/AuthContext";

export const PedigreeHeader = ({ name }: { name: string | undefined }) => {
  const { updatePedigreeDetailsResolver, pedigree, headerLoading } =
    usePedigreeContext();
  const { admin } = useAuthContext();
  const [editMode, setEditMode] = React.useState(false);
  const [pedigreeName, setPedigreeName] = React.useState(name);

  useEffect(() => {
    setPedigreeName(name);
  }, [editMode]);

  if (!pedigree) return null;

  const handleKeyDown = async (event: any) => {
    if (event.key === "Enter") {
      const success = updatePedigreeDetailsResolver({
        id: pedigree?.id,
        data: { name: pedigreeName },
      });
      setEditMode(false);
    }
  };

  return (
    <Flex
      position={"absolute"}
      className="pod-name"
      zIndex={1}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"black"}
    >
      {headerLoading ? (
        <Spinner />
      ) : editMode ? (
        <Input
          width={"10%"}
          value={pedigreeName}
          onChange={(e) => setPedigreeName(e.target.value)}
          onKeyDown={handleKeyDown}
          color={"text.secondary"}
        />
      ) : (
        <Flex gap={"2"} alignItems={"center"}>
          <Heading as="h4" size="md" color={"text.secondary"}>
            {name}
          </Heading>
          {admin && (
            <Box onClick={() => setEditMode(true)}>
              <AiOutlineEdit />
            </Box>
          )}
        </Flex>
      )}
    </Flex>
  );
};
