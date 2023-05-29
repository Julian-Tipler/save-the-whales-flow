import React, { useContext } from "react";
import WhaleContext from "./context/WhaleContext";
import { WhaleDetailsForm } from "./WhaleDetailsForm";
import { WhaleDetailsCard } from "./WhaleDetailsCard";

export const WhaleDetails = () => {
  const [editMode, setEditMode] = React.useState(false);
  const { whale } = useContext(WhaleContext);

  if (!whale) return <div>Loading...</div>;

  if (editMode) {
    return <WhaleDetailsForm whale={whale} setEditMode={setEditMode} />;
  } else {
    return <WhaleDetailsCard whale={whale} setEditMode={setEditMode} />;
  }
};
