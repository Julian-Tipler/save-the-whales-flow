import React from "react";
import { db } from "../../../../firebase";
import { doc, getDoc } from "firebase/firestore";

export const fetchPedigree = async ({
  id,
  setNodes,
  setEdges,
}: {
  id: string;
  setNodes: React.Dispatch<React.SetStateAction<any[]>>;
  setEdges: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const docRef = doc(db, "pedigrees", id);

  // Fetch the document data
  getDoc(docRef)
    .then((doc) => {
      if (doc.exists()) {
        console.log("Document data:", doc.data());
        setNodes(doc.data()?.nodes);
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};
