import React, { useContext, useEffect } from "react";
import { useWhaleContext } from "../context/WhaleContext";
import { WhaleDetailsForm } from "./WhaleDetailsForm";
import { WhaleDetailsCard } from "./WhaleDetailsCard";
import { useParams } from "react-router-dom";
import { BodyGrid } from "../../../../components/BodyGrid";
import { Grid, GridItem } from "@chakra-ui/react";
import { WhalesPedigrees } from "./WhalesPedigrees";

export const WhaleDetails = () => {
  const [editMode, setEditMode] = React.useState(false);
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
        {editMode ? (
          <WhaleDetailsForm
            whale={whale}
            setClose={setEditMode}
            handleSubmit={handleSubmit}
          />
        ) : (
          <WhaleDetailsCard whale={whale} setEditMode={setEditMode} />
        )}
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
