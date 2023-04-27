import React from "react";

export const WhaleContext = React.createContext<any>({});

export function WhaleProvider({ children }: any) {
  const value = {};
  return (
    <WhaleContext.Provider value={value}>{children}</WhaleContext.Provider>
  );
}

export default WhaleContext;
