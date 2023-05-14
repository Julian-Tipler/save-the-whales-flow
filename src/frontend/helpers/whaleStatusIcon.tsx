import { FaSkull } from "react-icons/fa";
import { Whale } from "../../db/Types/Entities";

export const whaleStatusIcon = (whale: Whale | undefined) => {
  if (!whale) return null;
  return whale.died ? (
    <FaSkull style={{ color: "#808080", fontSize: "12px" }} />
  ) : (
    <></>
  );
};
