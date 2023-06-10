import { Node, Edge } from "reactflow";

// Whale has both id and identification properties. id is the db entity id and identification is the user inputted id
// Not sure if id should be required or not. Every whale db entity has an id but every local one doesn't necessarilly have one.
// A local whale node doesn't have an id if it was just created and "save" hasn't been pushed yet.
export type Whale = {
  id?: string;
  identification?: string;
  name?: string;
  gender?: string;
  born?: string;
  died?: string;
  notes?: string;
};

export type Pedigree = {
  id?: string;
  name?: string;
  nodes: Node[];
  edges?: Edge[];
};
