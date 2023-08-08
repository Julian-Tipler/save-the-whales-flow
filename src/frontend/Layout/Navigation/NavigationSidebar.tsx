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
          History of the Southern Residents
        </Heading>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                About
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>Text here</Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Pods
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {pedigrees.map((pedigree, i) => {
            return (
              <AccordionPanel pb={4} key={`pedigree-${i}`}>
                <Link to={`/pods/${pedigree.id}`}>
                  <Text>{pedigree.name}</Text>
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
                  <Text>Create New Pod</Text>
                </Link>
              </AccordionButton>
            </h2>
          </AccordionItem>
        )}
      </Accordion>
    </NavigationSidebarProvider>
  );
};
