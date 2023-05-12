import { Node, Edge } from "reactflow";

export type Whale = {
  id: string;
  identification?: string;
  name?: string;
  gender?: string;
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
