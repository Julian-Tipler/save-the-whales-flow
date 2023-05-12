import React, { useEffect, createContext, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { fetchPedigrees } from "../../../../db/dataServices/fetchPedigrees";

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

  const createPedigreesResolver = async () => {
    
  };

  const value = { pedigrees };
  return (
    <PedigreesIndexContext.Provider value={value}>
      {children}
    </PedigreesIndexContext.Provider>
  );
}

export default PedigreesIndexContext;
