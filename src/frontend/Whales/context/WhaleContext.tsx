import React, { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useParams } from "react-router-dom";

import { saveOrUpdateWhale } from "../../../db/dataServices/saveOrUpdateWhale";
import { validateWhale } from "./validation/validateWhale";
import { Whale } from "../../../db/Types/Entities";
import { fetchWhale } from "../../../db/dataServices";

export const WhaleContext = React.createContext<any>({});

export function WhaleProvider({ children }: any) {
  const [whale, setWhale] = React.useState<Whale | null>(null);

  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No whale id provided");

  useEffect(() => {
    fetchWhaleResolver({ id });
  }, []);

  const fetchWhaleResolver = async ({ id }: { id: string }) => {
    if (!id) throw "No whale id provided";
    const whale = await fetchWhale({ id });
    setWhale({ ...whale.data(), id });
  };

  const updateWhaleResolver = async (whaleFormData: Whale) => {
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
