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
  return (
    <Box
      display={"flex"}
      position={"relative"}
      alignItems={"center"}
      cursor={"pointer"}
    >
      <Box
        width={"25px"}
        height={"25px"}
        backgroundColor={died ? "black" : gender === "male" ? "pink" : "blue"}
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
          transform: "translate(-52%, -50%)",
          zIndex: 1,
        },
      })}
    </Box>
  );
};
