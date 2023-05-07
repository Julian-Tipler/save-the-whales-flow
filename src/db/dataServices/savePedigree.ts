import { db } from "../../../firebase";
import { doc, updateDoc, setDoc, getDoc } from "firebase/firestore";
import { Node, Edge } from "reactflow";

export const savePedigree = async ({
  id,
  nodes,
  edges,
}: {
  id: string;
  nodes: Node[];
  edges: Edge[];
}) => {
  const pedigreeRef = doc(db, "pedigrees", id);

  //Save whales to db
  for (const node of nodes) {
    const { id } = node;
    const whaleRef = doc(db, "whales", id);

    const whaleSnap = await getDoc(whaleRef);
    if (!whaleSnap.exists()) {
      await setDoc(whaleRef, { id: id, name: "New Whale", born: "", died: "" });
    } else {
      console.log(`Whale with ID: ${id} already exists.`);
    }
  }

  const newData = {
    nodes,
    edges,
  };

  await updateDoc(pedigreeRef, newData);

  return;
};
