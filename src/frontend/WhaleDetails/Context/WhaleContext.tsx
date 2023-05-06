import React, { useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useParams } from "react-router-dom";
import { validateWhale } from "./ValidateWhale";

export const WhaleContext = React.createContext<any>({});

export function WhaleProvider({ children }: any) {
  const [whale, setWhale] = React.useState<any>(null);
  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No whale id provided");
  console.log(whale);
  useEffect(() => {
    fetchWhale();
  }, []);
  const whaleDocRef = doc(db, "whales", id);

  const fetchWhale = async () => {
    if (!id) throw "No whale id provided";
    const whaleDoc = await getDoc(whaleDocRef);
    setWhale({ ...whaleDoc.data(), id });
  };

  const saveWhale = async (whale: any) => {
      console.log("WHALE in context", whale);

    const errors = validateWhale(whale);
    // if (!errors.length) {
    //   await setDoc(whaleDocRef, whale, { merge: true });
    //   const newWhaleDoc = await getDoc(whaleDocRef);
    //   setWhale({ ...newWhaleDoc.data(), id });
    // }
    return errors;
  };

  const value = { whale, saveWhale };
  return (
    <WhaleContext.Provider value={value}>{children}</WhaleContext.Provider>
  );
}

export default WhaleContext;
