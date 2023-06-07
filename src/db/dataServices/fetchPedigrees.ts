import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

//Fetches all pedigrees from the database
export const fetchPedigrees = async () => {
  const pedigreesRef = collection(db, "pedigrees");
  const querySnapshot = await getDocs(pedigreesRef);
  const pedigrees = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  console.log("fetchPedigrees", pedigrees)
  return pedigrees;
};
