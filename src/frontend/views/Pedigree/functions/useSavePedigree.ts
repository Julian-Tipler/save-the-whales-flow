import { Edge, Node } from "reactflow";
import { Whale } from "../../../../db/Types/Entities";
import { createOrUpdateWhales } from "../../../../db/dataServices/createOrUpdateWhales";
import { updatePedigree } from "../../../../db/dataServices";

export const useSavePedigree = async ({
  id,
  nodes,
  edges,
  whales,
  setWhales,
  setSaveLoading,
}: {
  id: string;
  nodes: Node[];
  edges: Edge[];
  whales: Whale[];
  setPedigree: Function;
  setWhales: Function;
  setNodes: Function;
  setSaveLoading: Function;
}) => {
  setSaveLoading(true);
  const newWhales = await createOrUpdateWhales({ whales });
  setWhales(newWhales);
  await updatePedigree({ id, nodes, edges });
  setSaveLoading(false);
};
