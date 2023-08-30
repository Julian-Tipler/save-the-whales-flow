import { Button, Flex } from "@chakra-ui/react";
import { WhaleDrawerForm } from "./WhaleDrawerForm";
import { WhaleDrawerInfo } from "./WhaleDrawerInfo";
import { Whale } from "../../../../db/Types/Entities";
import { useState } from "react";

export const WhaleDrawerShell = ({ whale }: { whale: Whale }) => {
  const [isForm, setIsForm] = useState(false);

  return (
    <>
      {/* Info Or Form */}
      {isForm ? <WhaleDrawerForm /> : <WhaleDrawerInfo whale={whale} />}

      {/* Buttons */}
      {isForm ? (
        <Flex>
          <Button>Submit</Button>
          <Button>Cancel</Button>
        </Flex>
      ) : (
        <Flex>
          <Button>Edit</Button>
        </Flex>
      )}
    </>
  );
};
