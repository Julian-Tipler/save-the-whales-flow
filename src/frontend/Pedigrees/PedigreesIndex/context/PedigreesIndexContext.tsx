import React, { useEffect, createContext, useState } from "react";

import { fetchPedigrees } from "../../../../db/dataServices";
import { createPedigree } from "../../../../db/dataServices";
import { Pedigree } from "../../../../db/Types/Entities";

const PedigreesIndexContext = createContext<any>({});

export function PedigreesIndexProvider({ children }: any) {
  const [pedigrees, setPedigrees] = useState<any>([]);

  useEffect(() => {
    fetchPedegreesResolver();
  }, []);
  //should later use ID or something?
  const fetchPedegreesResolver = async () => {
    const pedigrees = await fetchPedigrees();
    setPedigrees(pedigrees);
  };

  const createPedigreeResolver = async ({ data }: { data: Pedigree }) => {
    await createPedigree({ data });
    await fetchPedegreesResolver();
  };

  const value = { createPedigreeResolver, pedigrees };
  return (
    <PedigreesIndexContext.Provider value={value}>
      {children}
    </PedigreesIndexContext.Provider>
  );
}

export default PedigreesIndexContext;
