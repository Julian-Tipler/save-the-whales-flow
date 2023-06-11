import { Edge, Node } from "reactflow";
import { Whale } from "../../../../../db/Types/Entities";
import { createOrUpdateWhales } from "../../../../../db/dataServices/createOrUpdateWhale";
import { updatePedigree } from "../../../../../db/dataServices";

export const useSavePedigree = async ({
  id,
  nodes,
  edges,
  whales,
  setPedigree,
  setWhales,
  setNodes,
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
  await createOrUpdateWhales({ whales });
  await updatePedigree({ id, nodes, edges });
  setSaveLoading(false);
};
