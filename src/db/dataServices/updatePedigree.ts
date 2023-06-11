import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Node, Edge } from "reactflow";
import { saveOrUpdateWhale } from "./saveOrUpdateWhale";

/**
 * This function saves NEW whales in a pedigree to the database.
 * It also saves the pedigree itself.
 * @param id The first number to add.
 * @param nodes This is taken from PedigreeContext. it is the array of nodes in the pedigree.
//  * @param edges This is also taken from PedigreeContext.
 * @returns Nothing. Perhaps could also handle refetching the data...
 */
export const updatePedigree = async ({
  id,
  nodes,
}: // edges,
{
  id: string;
  nodes: Node[];
  // edges: Edge[];
}) => {
  const pedigreeRef = doc(db, "pedigrees", id);

  // Saves whales that aren't in the /whales collection yet
  for (const node of nodes) {
    const { id: nodeId, data } = node;
    saveOrUpdateWhale({ id: nodeId, data });
  }

  const newData = {
    nodes,
    // edges,
  };

  await updateDoc(pedigreeRef, newData);
  return;
};
