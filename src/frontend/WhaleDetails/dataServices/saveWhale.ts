import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

export const saveWhale = async ({ whale, whaleDocRef }: any) => {
  await setDoc(whaleDocRef, whale, { merge: true });
  const newWhaleDoc = await getDoc(whaleDocRef);
  return newWhaleDoc.data();
};
