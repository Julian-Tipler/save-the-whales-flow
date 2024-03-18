import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useFirebaseImage } from "../../../db/dataServices/storage/helpers/getImage";

export const ImageSection = () => {
  const imageUrl = useFirebaseImage(
    "gs://save-the-whales-ee45b.appspot.com/killer-whale-7633370_1920.jpg"
  );
  if (!imageUrl) return <div>loading</div>;
  return <Image src={imageUrl} maxHeight={"100%"} />;
};
