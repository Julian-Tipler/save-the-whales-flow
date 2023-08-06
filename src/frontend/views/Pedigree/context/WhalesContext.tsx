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

  const { nodes } = usePedigreeContext();

  // // Handles deleted whales. Kind of sketch because I'm mixing contexts
  // useEffect(() => {
  //   const existingWhales = whales.filter((whale) =>
  //     nodes.some((node) => node.id === whale.id)
  //   );
  //   setWhales(existingWhales);
  // }, [nodes]);
  return (
    <WhalesContext.Provider value={value}>{children}</WhalesContext.Provider>
  );
}

export const useWhalesContext = () => useContext(WhalesContext);
