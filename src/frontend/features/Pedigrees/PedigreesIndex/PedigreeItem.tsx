import { Pedigree } from "../../../../db/Types/Entities";
import { Card } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const PedigreeItem = ({ pedigree }: { pedigree: Pedigree }) => {
  return (
    <Card padding={"4"}>
      <Link to={`/pedigrees/${pedigree.id}`}>{pedigree.name}</Link>
    </Card>
  );
};
