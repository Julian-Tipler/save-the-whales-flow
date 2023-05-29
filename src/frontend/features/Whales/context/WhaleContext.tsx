import React, { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { useParams } from "react-router-dom";

import { saveOrUpdateWhale } from "../../../../db/dataServices/saveOrUpdateWhale";
import { validateWhale } from "./validation/validateWhale";
import { Whale } from "../../../../db/Types/Entities";
import { fetchWhale } from "../../../../db/dataServices";

type WhaleContextValue = {
  whale: Whale | null;
  updateWhaleResolver: ({
    id,
    whaleFormData,
  }: {
    id: string;
    whaleFormData: Whale;
  }) => void;
};

export const WhaleContext = React.createContext<WhaleContextValue>(
  {} as WhaleContextValue
);

export function WhaleProvider({ children }: any) {
  const [whale, setWhale] = React.useState<Whale | null>(null);

  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No whale id provided");

  useEffect(() => {
    fetchWhaleResolver({ id });
  }, []);

  const fetchWhaleResolver = async ({ id }: { id: string }) => {
    const whale = await fetchWhale({ id });
    if (whale) {
      setWhale({ ...whale.data(), id });
    }
  };

  const updateWhaleResolver = async ({
    id,
    whaleFormData,
  }: {
    id: string;
    whaleFormData: Whale;
  }) => {
    console.log("updateWhaleResolver whaleFormData", whaleFormData);
    const errors = validateWhale(whaleFormData);
    if (!errors.length) {
      const newWhale = await saveOrUpdateWhale({ id, data: whaleFormData });
      setWhale({ ...newWhale, id });
    }
    return errors;
  };

  const value = { whale, updateWhaleResolver };
  return (
    <WhaleContext.Provider value={value}>{children}</WhaleContext.Provider>
  );
}

export default WhaleContext;
