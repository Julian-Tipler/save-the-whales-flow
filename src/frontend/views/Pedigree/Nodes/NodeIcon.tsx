import "./NodeIcon.css";
import { whaleStatusIcon } from "../../../components/WhaleStatusIcon";
import { Box } from "@chakra-ui/react";

export const NodeIcon = ({
  highlighted,
  gender,
  died,
}: {
  highlighted: boolean;
  gender?: string;
  died?: string;
}) => {
  const classes = `icon ${died ? "deceased" : gender}`;
  return (
    <Box display={"flex"} position={"relative"} alignItems={"center"}>
      <Box
        className={classes}
        width={"25px"}
        height={"25px"}
        backgroundColor={gender === "male" ? "pink" : "blue"}
        borderRadius={gender === "male" ? "" : "50%"}
        border={highlighted ? "3px solid #A2D9A0" : "none"}
      ></Box>
      {whaleStatusIcon({
        died,
        size: "16px",
        style: {
          position: "absolute",
          top: "50%",
          left: "51%",
          transform: "translate(-47%, -50%)",
          zIndex: 1,
        },
      })}
    </Box>
  );
};
