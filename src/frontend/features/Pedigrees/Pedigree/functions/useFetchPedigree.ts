import { fetchPedigree } from "../../../../../db/dataServices";
import { fetchWhales } from "../../../../../db/dataServices/fetchWhales";

export const useFetchPedigree = async ({
  id,
  setPedigree,
  setWhales,
  setNodes,
}: {
  id: string;
  setPedigree: Function;
  setWhales: Function;
  setNodes: Function;
}) => {
  const pedigree = await fetchPedigree({ id });
  if (!pedigree) throw new Error("Pedigree not found");
  const whaleIds = pedigree.nodes.map((node) => node.id);
  const whales = await fetchWhales({ ids: whaleIds });
  setWhales(whales);
  setPedigree({ name: pedigree.name, id: pedigree.id });
  setNodes(pedigree.nodes);
};
