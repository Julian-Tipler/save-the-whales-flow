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
import { BodyCard } from "../../components/BodyCard";
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
      </>
    );
  };

  if (justContent) return cardBody();
  return <BodyCard>{cardBody()}</BodyCard>;
};
