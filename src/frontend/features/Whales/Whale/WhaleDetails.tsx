import React, { useContext, useEffect } from "react";
import { useWhaleContext } from "../context/WhaleContext";
import { WhaleDetailsForm } from "./WhaleDetailsForm";
import { WhaleDetailsCard } from "./WhaleDetailsCard";
import { useParams } from "react-router-dom";

export const WhaleDetails = () => {
  const [editMode, setEditMode] = React.useState(false);
  const { whale, fetchWhaleResolver } = useWhaleContext();

  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No whale id provided");

  useEffect(() => {
    fetchWhaleResolver({ id });
  }, [id]);

  if (!whale) return <div>Loading...</div>;

  if (editMode) {
    return (
      <WhaleDetailsForm
        whale={whale}
        setClose={setEditMode}
        handleSubmit={handleSubmit}
      />
    );
  } else {
    return <WhaleDetailsCard whale={whale} setEditMode={setEditMode} />;
  }
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
