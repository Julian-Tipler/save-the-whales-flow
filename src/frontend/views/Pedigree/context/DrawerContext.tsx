import React, { useContext } from "react";
import { Whale } from "../../../../db/Types/Entities";

type DrawerContextValue = {
  drawerWhale: Whale | null;
  setDrawerWhale: React.Dispatch<React.SetStateAction<Whale | null>>;
};

export const DrawerContext = React.createContext<DrawerContextValue>(
  {} as DrawerContextValue
);

export function DrawerProvider({ children }: any) {
  const [drawerWhale, setDrawerWhale] = React.useState<Whale | null>(null);

  const value = { drawerWhale, setDrawerWhale };
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
}

export const useDrawerContext = () => useContext(DrawerContext);
