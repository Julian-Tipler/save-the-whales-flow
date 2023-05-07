import React, { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useParams } from "react-router-dom";

import { saveWhale } from "../../../db/dataServices/saveWhale";
import { validateWhale } from "./validateWhale";
import { Whale } from "../../../db/Types/Entities";

export const WhaleContext = React.createContext<any>({});

export function WhaleProvider({ children }: any) {
  const [whale, setWhale] = React.useState<Whale | null>(null);

  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No whale id provided");

  useEffect(() => {
    fetchWhale();
  }, []);

  const fetchWhale = async () => {
    if (!id) throw "No whale id provided";
    const whaleDocRef = doc(db, "whales", id);
    const whaleDoc = await getDoc(whaleDocRef);
    setWhale({ ...whaleDoc.data(), id });
  };

  const updateWhaleResolver = async (whaleFormData: Whale) => {
    const errors = validateWhale(whaleFormData);
    if (!errors.length) {
      const newWhale = await saveWhale({ id, data: whaleFormData });
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
