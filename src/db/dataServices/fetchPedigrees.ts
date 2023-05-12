import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export const fetchPedigrees = async () => {
  const pedigreesRef = collection(db, "pedigrees");
  const querySnapshot = await getDocs(pedigreesRef);

  const pedigrees = querySnapshot.docs.map((doc) => doc.data());
  return pedigrees;
};
