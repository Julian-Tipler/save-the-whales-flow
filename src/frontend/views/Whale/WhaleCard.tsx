import {
  CardHeader,
  CardBody,
  Text,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { whaleStatusIcon } from "../../helpers/whaleStatusIcon";
import { Whale } from "../../../db/Types/Entities";
import { useAuthContext } from "../../Auth/context/AuthContext";
import { BodyCard } from "../../../components/BodyCard";
import WhaleDetails from "./WhaleDetails";
import { useState } from "react";
import { WhaleForm } from "./WhaleForm";

export const WhaleCard = ({
  whale,
  handleSubmit,
}: {
  whale: Whale;
  handleSubmit: Function;
}) => {
  const [editMode, setEditMode] = useState(false);

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
        {editMode ? (
          <WhaleForm
            whale={whale}
            handleSubmit={handleSubmit}
            setEditMode={setEditMode}
          />
        ) : (
          <WhaleDetails whale={whale} />
        )}
      </CardBody>
      {admin && setEditMode && (
        <Button onClick={() => setEditMode(true)}>Edit</Button>
      )}
    </BodyCard>
  );
};
