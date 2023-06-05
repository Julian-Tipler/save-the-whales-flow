import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { fetchPedigrees } from "../../db/dataServices";
import { useEffect, useState } from "react";
import { Pedigree } from "../../db/Types/Entities";
import { Link, useNavigate } from "react-router-dom";

export const NavigationSidebar = () => {
  const [pedigrees, setPedigrees] = useState<Pedigree[]>([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await fetchPedigrees();
      setPedigrees(response);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const handlePedigreeClick = (id: string | undefined) => {
    navigate(`/pedigrees/${id}`);
  };

  if (!pedigrees) {
    return <div>loading...</div>;
  }

  return (
    <Accordion>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Pedigrees
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        {pedigrees.map((pedigree, i) => {
          return (
            <AccordionPanel pb={4} key={`pedigree-${i}`}>
              <Link to={`/pedigrees/${pedigree.id}`}>
                <Text
                  onClick={() => handlePedigreeClick(pedigree.id)}
                >{`${pedigree.name}`}</Text>
              </Link>
            </AccordionPanel>
          );
        })}
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Whales
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        {/* {["whale 1", "whale 2", "whale 3"].map((option, i) => {
          return (
            <AccordionPanel
              pb={4}
              key={`whale-${i}`}
            >{`${option}`}</AccordionPanel>
          );
        })} */}
      </AccordionItem>
    </Accordion>
  );
};
