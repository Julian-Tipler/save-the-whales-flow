import React from "react";
import { db } from "../../../../firebase";
import { doc, getDoc } from "firebase/firestore";

export const fetchPedigree = async ({ id }: { id: string }) => {
  const docRef = doc(db, "pedigrees", id);

  const pedigreeDoc = await getDoc(docRef);

  if (pedigreeDoc.exists()) {
    return pedigreeDoc.data();
  } else {
    console.log("Error getting document:");
  }
};
