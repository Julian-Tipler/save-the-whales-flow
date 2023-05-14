import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Node, Edge } from "reactflow";
import { saveOrUpdateWhale } from "./saveOrUpdateWhale";
import { Pedigree } from "../Types/Entities";

/**
 * This function saves NEW whales in a pedigree to the database.
 * It also saves the pedigree itself.
 * @param id The first number to add.
 * @returns Nothing. Perhaps could also handle refetching the data...
 */
export const updatePedigreeDetails = async ({
  id,
  data,
}: {
  id: string;
  data: Pedigree;
}) => {
  const pedigreeRef = doc(db, "pedigrees", id);
  await updateDoc(pedigreeRef, data);
  return;
};
