import React, { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useParams } from "react-router-dom";

import { saveWhale } from "../dataServices/saveWhale";
import { validateWhale } from "./validateWhale";

export const WhaleContext = React.createContext<any>({});

export function WhaleProvider({ children }: any) {
  const [whale, setWhale] = React.useState<any>(null);
  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No whale id provided");
  useEffect(() => {
    fetchWhale();
  }, []);
  const whaleDocRef = doc(db, "whales", id);

  const fetchWhale = async () => {
    if (!id) throw "No whale id provided";
    const whaleDoc = await getDoc(whaleDocRef);
    setWhale({ ...whaleDoc.data(), id });
  };

  const saveWhaleResolver = async (whale: any) => {
    const errors = validateWhale(whale);
    console.log("errors", errors);
    if (!errors.length) {
      const newWhale = await saveWhale({ whale, whaleDocRef });
      setWhale({ ...newWhale, id });
    }
    return errors;
  };

  const value = { whale, saveWhaleResolver };
  return (
    <WhaleContext.Provider value={value}>{children}</WhaleContext.Provider>
  );
}

export default WhaleContext;
