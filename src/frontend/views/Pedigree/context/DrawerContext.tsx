import React, { useContext } from "react";
import { Whale } from "../../../../db/Types/Entities";

type DrawerContextValue = {
  formWhale: Whale | null;
  setFormWhale: React.Dispatch<React.SetStateAction<Whale | null>>;
};

export const DrawerContext = React.createContext<DrawerContextValue>(
  {} as DrawerContextValue
);

export function DrawerProvider({ children }: any) {
  const [formWhale, setFormWhale] = React.useState<Whale | null>(null);

  const value = { formWhale, setFormWhale };
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
}

export const useDrawerContext = () => useContext(DrawerContext);
