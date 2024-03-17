import { FaSkullCrossbones } from "react-icons/fa";

export const whaleStatusIcon = ({
  died,
  size,
  style,
}: {
  died: boolean | undefined;
  size: "12px" | "16px";
  style: React.CSSProperties;
}) => {
  return died ? (
    <FaSkullCrossbones
      style={{
        color: "#808080",
        fontSize: size,
        position: "absolute",
        ...style,
      }}
    />
  ) : (
    <></>
  );
};
