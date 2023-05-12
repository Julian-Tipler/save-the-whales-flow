import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Whale } from "../../db/Types/Entities";

export const whaleStatus = (whale: Whale) => {
  return whale.died ? (
    <CheckIcon marginLeft={"4px"} color={"green.500"} />
  ) : (
    <CloseIcon marginLeft={"4px"} color={"red.500"} />
  );
};
