import React from "react";
import { db } from "../../../../firebase";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

export const savePedigree = async ({
  id,
  nodes,
  edges,
}: {
  id: string;
  nodes: any;
  edges: any;
}) => {
  const myCollection = collection(db, "pedigrees");

  // Create a new document with a unique ID
  const docRef = doc(db, "pedigrees", id);

  // Define the data to be saved
  const newData = {
    nodes,
    edges,
  };

  // Save the data to the new document
  await updateDoc(docRef, newData);

  return
};
