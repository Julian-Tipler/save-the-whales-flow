import React, { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useParams } from "react-router-dom";

export const WhaleContext = React.createContext<any>({});

export function WhaleProvider({ children }: any) {
  const [whale, setWhale] = React.useState<any>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchWhale();
  }, []);
  const whaleDocRef = doc(db, "whales", "628583f3-e642-4e51-a171-721a74a3fb69");

  const fetchWhale = async () => {
    if (!id) throw "No whale id provided"
    const whaleDoc = await getDoc(whaleDocRef);
    setWhale(whaleDoc.data());
  };

  const value = { whale, id };
  return (
    <WhaleContext.Provider value={value}>{children}</WhaleContext.Provider>
  );
}

export default WhaleContext;
