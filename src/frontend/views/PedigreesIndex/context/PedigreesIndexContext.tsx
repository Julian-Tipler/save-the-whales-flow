import { createContext, useState, useContext } from "react";
import { fetchPedigrees } from "../../../../db/dataServices";
import { createPedigree } from "../../../../db/dataServices";

type PedigreesIndexContextValue = {
  pedigrees: [];
  fetchPedegreesResolver: () => Promise<void>;
  createPedigreeResolver: ({ data }: { data: any }) => Promise<void>;
};

const PedigreesIndexContext = createContext<PedigreesIndexContextValue>(
  {} as PedigreesIndexContextValue
);

export function PedigreesIndexProvider({ children }: any) {
  const [pedigrees, setPedigrees] = useState<any>([]);

  const fetchPedegreesResolver = async () => {
    const pedigrees = await fetchPedigrees({});
    setPedigrees(pedigrees);
  };

  const createPedigreeResolver = async ({ data }: { data: any }) => {
    await createPedigree({ data });
    await fetchPedegreesResolver();
  };

  const value = { fetchPedegreesResolver, createPedigreeResolver, pedigrees };
  return (
    <PedigreesIndexContext.Provider value={value}>
      {children}
    </PedigreesIndexContext.Provider>
  );
}

export const usePedigreesIndexContext = () => useContext(PedigreesIndexContext);
