import React, { useEffect, createContext, useState, useContext } from "react";

import { Pedigree } from "../../../../../db/Types/Entities";
import { fetchPedigrees } from "../../../../../db/dataServices";
import { createPedigree } from "../../../../../db/dataServices";

const PedigreesIndexContext = createContext<any>({});

export function PedigreesIndexProvider({ children }: any) {
  const [pedigrees, setPedigrees] = useState<any>([]);

  const fetchPedegreesResolver = async () => {
    const pedigrees = await fetchPedigrees();
    setPedigrees(pedigrees);
  };

  const createPedigreeResolver = async ({ data }: { data: Pedigree }) => {
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
