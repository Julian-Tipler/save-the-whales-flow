import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAuthContext } from "./context/AuthContext";

export const Auth = () => {
  const { email, setEmail, password, setPassword, login, setLoggingIn } =
    useAuthContext();
  return (
    <Flex
      minH={"100vh"}
      minW={"100vw"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"} justify={"center"}>
          <Text fontSize={"4xl"} color={"black"}>
            Sign in to Save the Whales
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel color={"black"}>Email address</FormLabel>
              <Input
                color={"black"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel color={"black"}>Password</FormLabel>
              <Input
                color={"black"}
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
                  login();
                }}
              >
                Sign in
              </Button>
              <Button
                onClick={() => {
                  setLoggingIn(false);
                }}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
