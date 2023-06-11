import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { Pedigree } from "../Types/Entities";

//Fetches all pedigrees from the database
export const fetchPedigrees = async ({ ids }: { ids?: string[] }) => {
  if (!ids) {
    const pedigreesRef = collection(db, "pedigrees");
    const querySnapshot = await getDocs(pedigreesRef);
    const pedigrees = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return pedigrees as Pedigree[];
  } else {
    if (ids.length === 0) return [];
    const pedigreesQuery = query(
      collection(db, "pedigrees"),
      where("__name__", "in", ids)
    );
    const pedigreeDocs = await getDocs(pedigreesQuery);
    const pedigrees = pedigreeDocs.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return pedigrees;
  }
};
