import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Pedigree } from "../Types/Entities";

export const fetchPedigree = async ({ id }: { id: string }) => {
  const docRef = doc(db, "pedigrees", id);

  const pedigreeDoc = await getDoc(docRef);
  
  if (pedigreeDoc.exists()) {
    return { id: pedigreeDoc.id, ...pedigreeDoc.data() } as Pedigree;
  } else {
    return null
  }
};
