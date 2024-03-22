import {
  CardHeader,
  CardBody,
  Text,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { whaleStatusIcon } from "../../components/WhaleStatusIcon";
import { Whale } from "../../../db/Types/Entities";
import { useAuthContext } from "../../auth/context/AuthContext";
import { Card } from "../../components/Card";
import WhaleDetails from "./WhaleDetails";
import { useState } from "react";
import { WhaleForm } from "./WhaleForm";

export const WhaleCard = ({
  whale,
  handleSubmit,
  justContent,
}: {
  whale: Whale;
  handleSubmit: Function;
  justContent?: boolean;
}) => {
  const [editMode, setEditMode] = useState(false);

  const { admin } = useAuthContext();

  const cardBody = () => {
    return (
      <>
        <Heading size={"md"}>
          <Flex alignItems={"center"} gap={"2"}>
            <Text>{whale.identification}</Text>
            {whaleStatusIcon({ died: whale.died, size: "16px" })}
          </Flex>
        </Heading>
        <CardBody>
          {editMode ? (
            <WhaleForm
              whale={whale}
              handleSubmit={handleSubmit}
              setEditMode={setEditMode}
            />
          ) : (
            <WhaleDetails whale={whale} setEditMode={setEditMode} />
          )}
        </CardBody>
      </>
    );
  };

  if (justContent) return cardBody();
  return <Card>{cardBody()}</Card>;
};
