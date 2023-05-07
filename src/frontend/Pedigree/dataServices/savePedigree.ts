import React from "react";
import { db } from "../../../../firebase";
import {
  doc,
  updateDoc,
  setDoc,
  collection,
  getDocs,
  where,
  getDoc,
} from "firebase/firestore";
import { Node } from "reactflow";

export const savePedigree = async ({
  id,
  nodes,
  edges,
}: {
  id: string;
  nodes: any;
  edges: any;
}) => {
  // Create a new document with a unique ID
  const pedigreeRef = doc(db, "pedigrees", id);

  //need to check if a whale exists in the db

  for (const node of nodes) {
    const { id } = node;
    const whaleRef = doc(db, "whales", id);

    const whaleSnap = await getDoc(whaleRef);
    if (!whaleSnap.exists()) {
      await setDoc(whaleRef, { id: id, name: "New Whale" });
      console.log(`Created new whale with ID: ${id}`);
    } else {
      console.log(`Whale with ID: ${id} already exists.`);
    }
  }

  // Define the data to be saved
  const newData = {
    nodes,
    edges,
  };

  // Save the data to the new document
  await updateDoc(pedigreeRef, newData);

  return;
};
