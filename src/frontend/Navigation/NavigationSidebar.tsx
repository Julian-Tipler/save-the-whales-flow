import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

export const NavigationSidebar = () => {
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
        {["pedigree 1", "pedigree 2"].map((option, i) => {
          return (
            <AccordionPanel
              pb={4}
              key={`pedigree-${i}`}
            >{`${option}`}</AccordionPanel>
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
        {["whale 1", "whale 2", "whale 3"].map((option, i) => {
          return (
            <AccordionPanel
              pb={4}
              key={`whale-${i}`}
            >{`${option}`}</AccordionPanel>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
};
