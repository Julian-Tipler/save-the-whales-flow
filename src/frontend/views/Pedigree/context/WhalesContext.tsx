import React, { useContext } from "react";
import { Whale } from "../../../../db/Types/Entities";

type WhalesContextValue = {
  whales: Whale[];
  setWhales: React.Dispatch<React.SetStateAction<Whale[]>>;
};

export const WhalesContext = React.createContext<WhalesContextValue>(
  {} as WhalesContextValue
);

export function WhalesProvider({ children }: any) {
  const [whales, setWhales] = React.useState<Whale[]>([]);
  console.log("context", whales)

  const value = { whales, setWhales };
  return (
    <WhalesContext.Provider value={value}>{children}</WhalesContext.Provider>
  );
}

export const useWhalesContext = () => useContext(WhalesContext);
