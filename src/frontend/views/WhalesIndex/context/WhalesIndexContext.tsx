import React, { useContext } from "react";
import { fetchWhales } from "../../../../db/dataServices";

type WhalesIndexContextValue = {};

export const WhalesIndexContext = React.createContext<WhalesIndexContextValue>(
  {} as WhalesIndexContextValue
);

export function WhalesIndexProvider({ children }: any) {
  const fetchWhalesResolver = async ({ id }: { id: string }) => {};
}

export const useWhalesIndexContext = () => useContext(WhalesIndexContext);
