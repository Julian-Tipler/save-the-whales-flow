import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const fetchWhale = async ({ id }: { id: string }) => {
  const whaleDocRef = doc(db, "whales", id);
  const whaleDoc = await getDoc(whaleDocRef);

  return whaleDoc;
};
