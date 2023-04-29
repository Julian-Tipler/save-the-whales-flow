import React, { useContext, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import AuthContext from "./context/AuthContext";

export const Login = () => {
  const [pageType, setPageType] = useState<"login" | "signup">("login");
  const {
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    login,
    signup,
  } = useContext(AuthContext);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          {pageType === "login" ? (
            <Heading fontSize={"4xl"}>Log in to Save the Whales</Heading>
          ) : (
            <Heading fontSize={"4xl"}>Sign up to Save the Whales</Heading>
          )}
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                {/* <Checkbox>Remember me</Checkbox> */}
                {/* <Link color={"blue.400"}>Forgot password?</Link> */}
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  if (pageType === "login") {
                    login();
                  } else {
                    signup();
                  }
                }}
              >
                Sign in
              </Button>

              {pageType === "login" ? (
                <Button onClick={() => setPageType("signup")}>
                  Create an Account
                </Button>
              ) : (
                <Button onClick={() => setPageType("login")}>
                  Already have an Account
                </Button>
              )}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
