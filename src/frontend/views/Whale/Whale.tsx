import React, { useContext, useEffect } from "react";
import { useWhaleContext } from "./context/WhaleContext";
import { WhaleCard } from "../../cards/WhaleCard/WhaleCard";
import { useParams } from "react-router-dom";
import { BodyGrid } from "../../components/BodyGrid";
import { GridItem, Spinner } from "@chakra-ui/react";
import { WhalesPedigrees } from "./WhalesPedigrees";
import { validateWhale } from "../../cards/WhaleCard/validation/validateWhale";

export const Whale = () => {
  const { whale, fetchWhaleResolver, updateWhaleResolver } = useWhaleContext();

  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No whale id provided");

  const handleSubmit = ({ whaleFormData, setErrors, setEditMode }: any) => {
    return async () => {
      const errors = validateWhale(whaleFormData);
      if (errors.length) {
        setErrors(errors);
        return;
      }
      await updateWhaleResolver({
        id: id,
        whaleFormData: whaleFormData,
      });

      setEditMode(false);
    };
  };

  useEffect(() => {
    fetchWhaleResolver({ id });
  }, [id]);

  if (!whale) return <Spinner />;

  return (
    <BodyGrid>
      <GridItem colSpan={2} rowSpan={1}>
        <WhaleCard whale={whale} handleSubmit={handleSubmit} />
      </GridItem>
      <GridItem colSpan={2}>
        <WhalesPedigrees />
      </GridItem>
    </BodyGrid>
  );
};
