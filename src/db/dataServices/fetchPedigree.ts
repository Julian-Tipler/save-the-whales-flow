import React from "react";
import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Pedigree } from "../Types/Entities";

export const fetchPedigree = async ({ id }: { id: string }) => {
  const docRef = doc(db, "pedigrees", id);

  const pedigreeDoc = await getDoc(docRef);

  if (pedigreeDoc.exists()) {

    console.log("fetchPedigree")
    return { id: pedigreeDoc.id, ...pedigreeDoc.data() } as Pedigree;
  } else {
    console.log("Error getting document:");
  }
};
