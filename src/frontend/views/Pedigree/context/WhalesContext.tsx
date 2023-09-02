import React, { useContext, useEffect } from "react";
import { Whale } from "../../../../db/Types/Entities";
import { usePedigreeContext } from "./PedigreeContext";

type WhalesContextValue = {
  whales: Whale[];
  setWhales: React.Dispatch<React.SetStateAction<Whale[]>>;
};

export const WhalesContext = React.createContext<WhalesContextValue>(
  {} as WhalesContextValue
);

export function WhalesProvider({ children }: any) {
  const [whales, setWhales] = React.useState<Whale[]>([]);
  const value = { whales, setWhales };

  console.log(whales)

  return (
    <WhalesContext.Provider value={value}>{children}</WhalesContext.Provider>
  );
}

export const useWhalesContext = () => useContext(WhalesContext);
