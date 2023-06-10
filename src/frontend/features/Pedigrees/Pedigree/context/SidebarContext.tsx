import React, { useContext } from "react";
import { Whale } from "../../../../../db/Types/Entities";

type SidebarContextValue = {
  whale: Whale | null;
  setWhale: React.Dispatch<React.SetStateAction<Whale | null>>;
};

export const SidebarContext = React.createContext<SidebarContextValue>(
  {} as SidebarContextValue
);

export function SidebarProvider({ children }: any) {
  const [whale, setWhale] = React.useState<Whale | null>(null);

  const value = { whale, setWhale };
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export const useSidebarContext = () => useContext(SidebarContext);
