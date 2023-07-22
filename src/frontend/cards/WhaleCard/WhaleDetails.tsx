import { Flex, Text } from "@chakra-ui/react";
import { Whale } from "../../../db/Types/Entities";

const WhaleDetails = ({ whale }: { whale: Whale }) => {
  return (
    <>
      <Flex padding={"10px"}>
        <Text width={"140px"}>Status: </Text>
        <Text>{!whale.died ? "Alive" : "Deceased"}</Text>
      </Flex>
      <Flex padding={"10px"}>
        <Text width={"140px"}>Name: </Text>
        <Text>{whale.name}</Text>
      </Flex>
      <Flex padding={"10px"}>
        <Text width={"140px"}>Gender: </Text>
        <Text>{whale.gender}</Text>
      </Flex>
      <Flex padding={"10px"}>
        <Text width={"140px"}>Born: </Text>
        <Text>{whale.born}</Text>
      </Flex>
      <Flex padding={"10px"}>
        <Text width={"140px"}>Died: </Text>
        <Text>{whale.died}</Text>
      </Flex>
      <Flex padding={"10px"}>
        <Text width={"140px"}>Notes: </Text>
        <Text>{whale.notes}</Text>
      </Flex>
    </>
  );
};

export default WhaleDetails;
