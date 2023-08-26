import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Icon,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { fetchPedigrees } from "../../../db/dataServices";
import { useEffect, useState } from "react";
import { Pedigree, Whale } from "../../../db/Types/Entities";
import { Link, useParams } from "react-router-dom";
import { fetchWhales } from "../../../db/dataServices/fetchWhales";
import { NavigationSidebarProvider } from "./context/NavigationSidebarContext";
import { useAuthContext } from "../../auth/context/AuthContext";
import {
  FiHome,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiSmartphone,
} from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GiWhaleTail } from "react-icons/gi";
import { RxDotFilled } from "react-icons/rx"

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

  const navItems = [
    { name: "Home", icon: FiHome, href: "/" },
    { name: "About", icon: FiSmartphone, href: "/post" },
    { name: "Pods", icon: FiCompass, href: "/" },
  ];

  const podUrl = useParams<{ id: string }>();

  return (
    <NavigationSidebarProvider>
      <Accordion left="0" top="0" padding={"10px"} width={300} allowToggle>
        <Heading size={"xl"} padding={"10px"} fontWeight={600}>
          History of the Southern Residents
        </Heading>
        <AccordionItem>
          <AccordionButton>
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "text.primary",
              }}
              as={IoMdInformationCircleOutline}
            />
            <Box as="span" flex="1" textAlign="left">
              About
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>
              “A public repository of information on an endangered population of
              killer whales resident to the coastal eastern North Pacific Ocean,
              the Southern Residents. Subject to ongoing monitoring since 1976,
              Southern Resident killer whales (currently numbering just 75
              living animals) are severely impacted by anthropogenic activity,
              including reduction of their preferred prey, severe chemical and
              acoustic pollution, and historical captures for the aquarium
              industry. Synthesizing census information from multiple sources in
              a succinct, engaging format, this website enables full
              visualization of the decline of this icon of the Pacific Northwest
              like never before, emphasizing the need for immediate and sweeping
              conservation action.”
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "text.primary",
              }}
              as={GiWhaleTail}
            />
            <Box as="span" flex="1" textAlign="left">
              Pods
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel padding={0}>
            {pedigrees.map((pedigree, i) => {
              return (
                <AccordionButton>
                  {podUrl?.id === pedigree.id ? (
                    <Icon
                      mr="3"
                      fontSize="20"
                      _groupHover={{
                        color: "text.primary",
                      }}
                      as={RxDotFilled}
                    />
                  ) : (
                    <Box marginRight={"32px"} />
                  )}
                  <Link key={`pedigree-${i}`} to={`/pods/${pedigree.id}`}>
                    <Text>{pedigree.name}</Text>
                  </Link>
                </AccordionButton>
              );
            })}
          </AccordionPanel>
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
