import { FaSkull } from "react-icons/fa";
import { Whale } from "../../db/Types/Entities";

export const whaleStatusIcon = ({
  whale,
  size,
}: {
  whale: Whale | undefined;
  size: "12px" | "16px";
}) => {
  if (!whale) return null;
  return whale.died ? (
    <FaSkull style={{ color: "#808080", fontSize: size }} />
  ) : (
    <></>
  );
};
