import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

export const fetchWhales = async ({ ids }: { ids?: string[] }) => {

  if (!ids) {
    const whalesRef = collection(db, "whales");
    const querySnapshot = await getDocs(whalesRef);
    const whales = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return whales;
  } else {
    if(ids.length === 0) return []
    const whaleQuery = query(
      collection(db, "whales"),
      where("__name__", "in", ids)
    );
    const whaleDocs = await getDocs(whaleQuery);
    const whales = whaleDocs.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return whales;
  }
};
