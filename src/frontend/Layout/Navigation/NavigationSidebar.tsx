import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { fetchPedigrees } from "../../../db/dataServices";
import { useEffect, useState } from "react";
import { Pedigree, Whale } from "../../../db/Types/Entities";
import { Link } from "react-router-dom";
import { fetchWhales } from "../../../db/dataServices/fetchWhales";
import { NavigationSidebarProvider } from "./context/NavigationSidebarContext";
import { useAuthContext } from "../../auth/context/AuthContext";

export const NavigationSidebar = () => {
  const [pedigrees, setPedigrees] = useState<Pedigree[]>([]);
  const [whales, setWhales] = useState<Whale[]>([]);
  const { admin } = useAuthContext();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const pedigrees = await fetchPedigrees({});
      setPedigrees(pedigrees);
      const whales = await fetchWhales({});
      setWhales(whales);
    } catch (error) {
      console.error(error);
    }
  };

  if (!pedigrees || !whales) {
    return <Spinner />;
  }

  return (
    <NavigationSidebarProvider>
      <Accordion
        position={"fixed"}
        width="300px"
        left="0"
        top="0"
        padding={"10px"}
      >
        <Heading size={"xl"} padding={"10px"}>
          SAVE THE WHALES
        </Heading>
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
                  <Text>{pedigree.name}</Text>
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
          {whales.map((whale, i) => {
            return (
              <AccordionPanel pb={4} key={`whale-${i}`}>
                <Link to={`/whales/${whale.id}`}>
                  <Text>{whale.name}</Text>
                </Link>
              </AccordionPanel>
            );
          })}
        </AccordionItem>
        {admin && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Link to={`/pedigrees`}>
                  <Text>Create New Pedigree</Text>
                </Link>
              </AccordionButton>
            </h2>
          </AccordionItem>
        )}
      </Accordion>
    </NavigationSidebarProvider>
  );
};
