import {
  Box,
  Button,
  Divider,
  Flex,
  Stack,
  Text,
  Image,
  Input,
} from "@chakra-ui/react";
import React from "react";

import Faqs from "./Faqs";
import PriceSignup from "./PriceSignup";

import PricesTop from "./PricesTop";
import Trial from "./Trial";
const Prices = () => {
  return (
    <Box
      color={"#FCE5D8"}
      fontFamily={"sans-serif"}
      w={{ base: "100%", md: "100%", lg: "100%" }}
    >
      <PricesTop />

      <Trial />

      <Faqs />

      <PriceSignup />
    </Box>
  );
};

export default Prices;
