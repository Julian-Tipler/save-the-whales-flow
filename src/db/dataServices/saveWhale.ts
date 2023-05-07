import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const saveWhale = async ({ id, data }: { id: string; data: any }) => {
  const whaleDocRef = doc(db, "whales", id);

  await setDoc(whaleDocRef, data, { merge: true });
  const newWhaleDoc = await getDoc(whaleDocRef);
  return newWhaleDoc.data();
};
