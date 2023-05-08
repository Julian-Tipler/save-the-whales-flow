import { db } from "../../../firebase";
import { doc, updateDoc, setDoc, getDoc } from "firebase/firestore";
import { Node, Edge } from "reactflow";
import { saveWhale } from "./saveWhale";

/**
 * This function saves NEW whales in a pedigree to the database.
 * It also saves the pedigree itself.
 * @param id The first number to add.
 * @param nodes This is taken from PedigreeContext. it is the array of nodes in the pedigree.
 * @param edges This is also taken from PedigreeContext.
 * @returns Nothing. Perhaps could also handle refetching the data...
 */
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

  // Saves whales that aren't in the /whales collection yet
  for (const node of nodes) {
    const { id:nodeId } = node;
    const whaleRef = doc(db, "whales", nodeId);

    const whaleSnap = await getDoc(whaleRef);
    if (!whaleSnap.exists()) {
      saveWhale({ id:nodeId, data: { name: "<no name>", born: "", died: "" } });
    }
  }

  const newData = {
    nodes,
    edges,
  };

  await updateDoc(pedigreeRef, newData);
  return;
};
