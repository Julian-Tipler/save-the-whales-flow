import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

export const fetchWhales = async ({ ids }: { ids: string[] }) => {
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
};
