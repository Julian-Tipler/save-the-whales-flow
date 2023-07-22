import React, { useContext } from "react";
import { Whale } from "../../../../db/Types/Entities";

type DrawerContextValue = {
  whaleForm: Whale | null;
  setWhaleForm: React.Dispatch<React.SetStateAction<Whale | null>>;
};

export const DrawerContext = React.createContext<DrawerContextValue>(
  {} as DrawerContextValue
);

export function DrawerProvider({ children }: any) {
  const [whaleForm, setWhaleForm] = React.useState<Whale | null>(null);

  const value = { whaleForm, setWhaleForm };
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
}

export const useDrawerContext = () => useContext(DrawerContext);
