import { Node, Edge } from "reactflow";

export type Whale = {
  id: string;
  name?: string;
  born?: string;
  died?: string;
  notes?: string;
};

export type Pedigree = {
  id: string;
  name?: string;
  nodes?: Node[];
  edges?: Edge[];
};
