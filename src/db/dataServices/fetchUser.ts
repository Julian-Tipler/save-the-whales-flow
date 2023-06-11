import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const fetchUser = async (uid: string) => {
  const userRef = doc(db, "users", uid);
  try {
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      return userData;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};
