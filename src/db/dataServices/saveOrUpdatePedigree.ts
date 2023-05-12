import { db } from "../../../firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { Pedigree } from "../Types/Entities";

/**
 * This function saves NEW whales in a pedigree to the database.
 * It also saves the pedigree itself.
 * @param id The first number to add.
 * @param nodes This is taken from PedigreeContext. it is the array of nodes in the pedigree.
 * @param edges This is also taken from PedigreeContext.
 * @returns Nothing. Perhaps could also handle refetching the data...
 */
export const createPedigree = async ({ data }: { data?: Pedigree }) => {
  try {
    const pedigreesRef = collection(db, "pedigrees");
    const docRef = await addDoc(pedigreesRef, data);
    console.log("Pedigree created with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error creating pedigree:", error);
  }
};
