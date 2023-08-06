import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Whale } from "../Types/Entities";

// Assuming you have initialized the Firestore app and obtained the 'db' instance.

export const createOrUpdateWhales = async ({ whales }: { whales: Whale[] }) => {
  const batch = [];

  for (const whale of whales) {
    const { id, ...whaleData } = whale;
    const whaleRef = doc(collection(db, "whales"), id);

    // Check if the whale exists
    const whaleSnapshot = await getDoc(whaleRef);

    if (whaleSnapshot.exists()) {
      // Whale exists, update it
      await updateDoc(whaleRef, { ...whaleData });
      const updatedWhaleSnapshot = await getDoc(whaleRef);

      batch.push({
        id: updatedWhaleSnapshot.id,
        ...updatedWhaleSnapshot.data(),
      });
    } else {
      // Whale doesn't exist, create it
      await setDoc(whaleRef, { ...whaleData });
      const updatedWhaleSnapshot = await getDoc(whaleRef);
      batch.push({
        id: updatedWhaleSnapshot.id,
        ...updatedWhaleSnapshot.data(),
      });
    }
  }
  return batch;
};
