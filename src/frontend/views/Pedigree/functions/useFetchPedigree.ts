import { fetchPedigree } from "../../../../db/dataServices";
import { fetchWhales } from "../../../../db/dataServices/fetchWhales";

export const useFetchPedigree = async ({
  id,
  setPedigree,
  setWhales,
  setNodes,
  setEdges,
}: {
  id: string;
  setPedigree: Function;
  setWhales: Function;
  setNodes: Function;
  setEdges: Function;
}) => {
  const pedigree = await fetchPedigree({ id });
  if (!pedigree) throw new Error("Pedigree not found");
  const whaleIds = pedigree.nodes.map((node) => node.id);
  const whales = await fetchWhales({ ids: whaleIds });
  setPedigree({ name: pedigree.name, id: pedigree.id });
  setWhales(whales);
  setNodes(pedigree.nodes);
  setEdges(pedigree.edges);
};
