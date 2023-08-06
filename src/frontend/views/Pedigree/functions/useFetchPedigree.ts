import { fetchPedigree } from "../../../../db/dataServices";
import { fetchWhales } from "../../../../db/dataServices/fetchWhales";

export const useFetchPedigree = async ({
  id,
  setPedigree,
  setWhales,
  setNodes,
  setEdges,
  loading,
  setLoading,
}: {
  id: string;
  setPedigree: Function;
  setWhales: Function;
  setNodes: Function;
  setEdges: Function;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  setLoading(true);
  const pedigree = await fetchPedigree({ id });
  if (!pedigree) {
    setLoading(false);
    return;
  }
  const whaleIds = pedigree.nodes.map((node) => node.id);
  const whales = await fetchWhales({ ids: whaleIds });
  setPedigree({ name: pedigree.name, id: pedigree.id });
  setWhales(whales);
  setNodes(pedigree.nodes);
  setEdges(pedigree.edges);
  setLoading(false);
};
