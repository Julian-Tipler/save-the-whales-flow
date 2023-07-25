import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Whale } from "../../../db/Types/Entities";
import { useAuthContext } from "../../auth/context/AuthContext";

const WhaleDetails = ({
  whale,
  setEditMode,
}: {
  whale: Whale;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { admin } = useAuthContext();

  return (
    <Flex flexDirection="column" justifyContent={"space-between"}>
      <Box>
        <Flex padding={"8px"}>
          <Text width={"140px"}>Status: </Text>
          <Text>{!whale.died ? "Alive" : "Deceased"}</Text>
        </Flex>
        <Flex padding={"8px"}>
          <Text width={"140px"}>Name: </Text>
          <Text>{whale.name}</Text>
        </Flex>
        <Flex padding={"8px"}>
          <Text width={"140px"}>Gender: </Text>
          <Text>{whale.gender}</Text>
        </Flex>
        <Flex padding={"8px"}>
          <Text width={"140px"}>Born: </Text>
          <Text>{whale.born}</Text>
        </Flex>
        <Flex padding={"8px"}>
          <Text width={"140px"}>Died: </Text>
          <Text>{whale.died}</Text>
        </Flex>
        <Flex padding={"8px"}>
          <Text width={"140px"}>Notes: </Text>
          <Text>{whale.notes}</Text>
        </Flex>
      </Box>
      <Flex justifyContent={"center"} marginTop={"16px"}>
        {admin && setEditMode && (
          <Button
            onClick={() => setEditMode(true)}
            borderRadius={"4px"}
            variant={"outline"}
            width={"100px"}
          >
            Edit
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default WhaleDetails;
