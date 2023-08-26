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
import { FiHome, FiCompass, FiSmartphone } from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GiWhaleTail, GiSailboat, GiFishEscape } from "react-icons/gi";
import { RxDotFilled } from "react-icons/rx";
import { BsBoxArrowUpRight } from "react-icons/bs";

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
          <AccordionButton padding={0}>
            <Link
              to={`/about`}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                paddingLeft: "16px",
              }}
            >
              <Flex alignItems={"center"}>
                <Icon
                  mr="3"
                  fontSize="20"
                  _groupHover={{
                    color: "text.primary",
                  }}
                  as={GiSailboat}
                />
                <Box as="span" flex="1" textAlign="left">
                  About the Project
                </Box>
              </Flex>
            </Link>
          </AccordionButton>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton padding={0}>
            <Link
              to={`/about`}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                paddingLeft: "16px",
              }}
            >
              <Flex alignItems={"center"}>
                <Icon
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                    color: "text.primary",
                  }}
                  as={GiFishEscape}
                />
                <Box as="span" flex="1" textAlign="left">
                  Personal Page
                </Box>
              </Flex>
            </Link>
          </AccordionButton>
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
                <AccordionButton key={`accordian-${i}`} padding={0}>
                  <Link
                    key={`pedigree-${i}`}
                    to={`/pods/${pedigree.id}`}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "6px",
                      paddingLeft: "16px",
                    }}
                  >
                    <Flex>
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
                      <Text>{pedigree.name}</Text>
                    </Flex>
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
