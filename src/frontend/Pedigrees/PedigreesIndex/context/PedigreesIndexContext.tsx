import React, { useCallback, useEffect, createContext, useState } from "react";
import {
  Connection,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
  Node,
} from "reactflow";
import { fetchPedigree, updatePedigree } from "../../../../db/dataServices";
import { Pedigree } from "../../../../db/Types/Entities";
import { fetchWhales } from "../../../../db/dataServices/fetchWhales";
import { useParams } from "react-router-dom";

const PedigreesIndexContext = createContext<any>({});

export function PedigreesIndexProvider({ children }: any) {
  
  const value = {

  };
  return (
    <PedigreesIndexContext.Provider value={value}>
      {children}
    </PedigreesIndexContext.Provider>
  );
}

export default PedigreesIndexContext;
