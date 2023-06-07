import React, { useContext } from "react";

type NavigationSidebarContextValue = {};

const NavigationSidebarContext =
  React.createContext<NavigationSidebarContextValue>(
    {} as NavigationSidebarContextValue
  );

export function NavigationSidebarProvider({ children }: any) {
  const value = {};
  return (
    <NavigationSidebarContext.Provider value={value}>
      {children}
    </NavigationSidebarContext.Provider>
  );
}

export const useNavigationSidebarContext = () =>
  useContext(NavigationSidebarContext);
