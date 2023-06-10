import React, { useContext } from "react";
import { Whale } from "../../../../../db/Types/Entities";

type SidebarContextValue = {
  whaleForm: Whale | null;
  setWhaleForm: React.Dispatch<React.SetStateAction<Whale | null>>;
};

export const SidebarContext = React.createContext<SidebarContextValue>(
  {} as SidebarContextValue
);

export function SidebarProvider({ children }: any) {
  const [whaleForm, setWhaleForm] = React.useState<Whale | null>(null);

  const value = { whaleForm, setWhaleForm };
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export const useSidebarContext = () => useContext(SidebarContext);
