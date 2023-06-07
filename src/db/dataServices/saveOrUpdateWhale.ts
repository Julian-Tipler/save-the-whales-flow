import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Whale } from "../Types/Entities";

export const saveOrUpdateWhale = async ({
  id,
  data,
}: {
  id: string;
  data?: Whale;
}) => {
  const whaleRef = doc(db, "whales", id);
  const whaleSnap = await getDoc(whaleRef);

  //update
  if (whaleSnap.exists()) {
    await setDoc(whaleRef, data, { merge: true });
  }
  //create
  else {
    await setDoc(
      whaleRef,
      { name: "<no name>", born: "", died: "" },
      { merge: true }
    );
  }
  console.log("saveOrUpdateWhale")
  const newWhaleDoc = await getDoc(whaleRef);
  return newWhaleDoc.data();
};
