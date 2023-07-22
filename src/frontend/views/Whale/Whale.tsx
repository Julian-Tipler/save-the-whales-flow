import React, { useContext, useEffect } from "react";
import { useWhaleContext } from "./context/WhaleContext";
import { WhaleCard } from "./WhaleCard";
import { useParams } from "react-router-dom";
import { BodyGrid } from "../../components/BodyGrid";
import { Grid, GridItem } from "@chakra-ui/react";
import { WhalesPedigrees } from "./WhalesPedigrees";

export const WhaleDetails = () => {
  const { whale, fetchWhaleResolver } = useWhaleContext();

  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No whale id provided");

  useEffect(() => {
    fetchWhaleResolver({ id });
  }, [id]);

  if (!whale) return <div>Loading...</div>;

  return (
    <BodyGrid>
      <GridItem colSpan={1}>
        <WhaleCard whale={whale} handleSubmit={handleSubmit} />
      </GridItem>
      <GridItem colSpan={2}>
        <WhalesPedigrees />
      </GridItem>
    </BodyGrid>
  );
};

export const handleSubmit = ({
  id,
  updateWhaleResolver,
  whaleFormData,
  setErrors,
  setEditMode,
}: any) => {
  return async () => {
    const errors = await updateWhaleResolver({
      id: id,
      whaleFormData: whaleFormData,
    });
    if (errors.length) {
      setErrors(errors);
    } else {
      setEditMode(false);
    }
  };
};
