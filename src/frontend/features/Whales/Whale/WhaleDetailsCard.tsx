import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { whaleStatusIcon } from "../../../helpers/whaleStatusIcon";
import { Whale } from "../../../../db/Types/Entities";
import { useAuthContext } from "../../../Auth/context/AuthContext";
import { BodyCard } from "../../../components/BodyCard";

export const WhaleDetailsCard = ({
  whale,
  setEditMode,
}: {
  whale: Whale;
  setEditMode?: any;
}) => {
  const { admin } = useAuthContext();
  return (
    <BodyCard>
      <CardHeader>
        <Heading size={"md"} padding={"4px"}>
          <Flex alignItems={"center"} gap={"2"}>
            <Text>{whale.identification}</Text>
            {whaleStatusIcon({ whale, size: "16px" })}
          </Flex>
        </Heading>
      </CardHeader>
      <CardBody>
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
      </CardBody>
      {admin && setEditMode && (
        <Button onClick={() => setEditMode(true)}>Edit</Button>
      )}
    </BodyCard>
  );
};
