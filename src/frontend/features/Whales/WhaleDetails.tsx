import React, { useContext, useEffect } from "react";
import { useWhaleContext } from "./context/WhaleContext";
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
    return <WhaleDetailsForm whale={whale} setEditMode={setEditMode} />;
  } else {
    return <WhaleDetailsCard whale={whale} setEditMode={setEditMode} />;
  }
};
