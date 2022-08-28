import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsCheckLg} from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PricesTop = () => {
  const [annual1, setAnnual1] = useState("$9");
  const [annual2, setAnnual2] = useState("$18");
const navigate =useNavigate()
  const handleAnnual = () => {
    setAnnual1("$9");
    setAnnual2("$18");
  };

  const handleMonthly = () => {
    setAnnual1("$10");
    setAnnual2("$20");
  };
  return (
    <Box textAlign={"center"}>
      <Text
        fontSize={{ base: "26.4px", md: "30px", lg: "56px" }}
        mt={{ base: 5 }}
        pt={{ base: "24px", md: "27px", lg: "24px" }}
      >
        Pricing Plans
      </Text>
      <Text
        fontSize={{ base: "15px", md: "16.2px", lg: "18px" }}
        mt={{ base: "50px" }}
        margin={"auto"}
        m={{ base: "20px 38px 20px", md: "30px 0px 20px", lg: "30px 0px 20px" }}
      >
        No credit card required. All plans come with a free, 30-day trial of our
        Premium features.
      </Text>
      <Text
        fontSize={{ base: "15px", md: "16.2px", lg: "18px" }}
        mt={{ base: "40px", md: "40px", lg: "" }}
      >
        Choose your billing:
      </Text>
      <Flex

        color={"black"}
        ml={{ base: "80px", md: "280px", lg: "620px" }}
        mt={{ base: "20px", md: "30px", lg: "20px" }}
      >
        <Button
          borderTopRightRadius={"none"}
          borderBottomRightRadius="none"
          w={{ base: "100px", md: "100px", lg: "150px" }}
          h="46px"
          borderRadius="30px"
          _hover={{ bg: "#E57CD8" }}
          onClick={handleAnnual}
        >
          Annual
        </Button>
        <Button
          borderTopLeftRadius={"none"}
          borderBottomLeftRadius="none"
          w={{ base: "100px", md: "100px", lg: "150px" }}
          h="46px"
          borderRadius="30px"
          _hover={{ bg: "#E57CD8" }}
          onClick={handleMonthly}
        >
          Monthly
        </Button>
      </Flex>

      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        w={{ base: "", md: "", lg: "80%" }}
        h={{ base: "", md: "", lg: "800px" }}
        m="auto"
        color={"white"}
        gap={{ lg: "15px", base: "15px", md: "15px" }}
        mt={"70px"}
      >
        <Box
          w={{ base: "90%", md: "", lg: "24%" }}
          m={{ base: "auto", md: "auto" }}
          border="1px solid white"
          bg="#412A4C"
        >
          <Text
            fontSize={{ base: "19.2", md: "19.2px", lg: "24px" }}
            w="80%"
            m={{
              base: "25px 0px 0px -100px",
              md: "25px 0px 0px -250px",
              lg: "25px 0px 0px -50px",
            }}
            fontWeight="bold"
          >
            Free
          </Text>
          <Text
            fontSize={{ base: "15px", md: "15.2px", lg: "15.36px" }}
            m={{
              base: "5px 0px 0px 20px",
              md: "5px 0px 0px 25px",
              lg: "5px 0px 0px 25px",
            }}
            pl="8px"
            w="80%"
            textAlign={"left"}
          >
            Seamless time tracking and reporting designed with freelancers in
            mind
          </Text>
          <Flex
            m={{
              base: "5px 0px 0px 30px",
              md: "5px 0px 0px 30px",
              lg: "5px 0px 0px 20px",
            }}
            gap="20px"
          >
            <Text
              fontSize={{ base: "48px", md: "48px", lg: "48px" }}
              color="#E57CD8"
            >
              $0
            </Text>
            <Text fontSize={{ base: "", md: "", lg: "12px" }} mt="25px">
              Free for up to 5 users.
            </Text>
          </Flex>
          <Divider w={{ base: "", md: "700px", lg: "200px" }} m="auto" mt={5} />
          <Box
            fontSize={{ base: "14px", md: "14px", lg: "14px" }}
            p={{ base: "5px", md: "", lg: "5px" }}
            w={{ base: "80%", md: "80%", lg: "80%" }}
            m={{
              base: "5px 0px 0px 20px",
              md: "5px 0px 0px 40px",
              lg: "5px 0px 0px 20px",
            }}
            textAlign={"left"}
          >
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Unlimited time tracking</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Unlimited projects, clients, and tags</Box>{" "}
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Exportable reports</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Web app, mobile apps, and desktop apps</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Automated time tracking triggers</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Idle time detection</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Pomodoro timer</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>CSV imports</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Personal desktop activity tracking</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Track time in 100+ popular tools</Box>
            </Flex>
          </Box>
          <Button
            fontSize={{ base: "", md: "", lg: "16px" }}
            borderRadius="30px"
            w={{ base: "300px", md: "700px", lg: "230px" }}
            p="25px"
            bg="#2c1338"
            mt={{ base: "30px", md: "40px", lg: "70px" }}
            mb={{ base: "20px", md: "20px", lg: "" }}
            _hover={{ bg: "#412A4C", border: "1px solid white" }}
            onClick={()=>navigate("/timer")}
          >
            Get started
          </Button>
        </Box>
        {/* **** */}
        <Box
          w={{ base: "90%", md: "", lg: "24%" }}
          m={{ base: "auto", md: "auto" }}
          ml={{ base: "300px", md: "", lg: "" }}
          border="1px solid white"
          bg="#412A4C"
        >
          <Text
            fontSize={{ base: "19.2", md: "19.2px", lg: "24px" }}
            w="80%"
            m={{
              base: "25px 0px 0px -90px",
              md: "25px 0px 0px -250px",
              lg: "25px 0px 0px -50px",
            }}
            fontWeight="bold"
          >
            Starter
          </Text>
          <Text
            fontSize={{ base: "15px", md: "15.2px", lg: "15.36px" }}
            m={{
              base: "5px 0px 0px 20px",
              md: "5px 0px 0px 25px",
              lg: "5px 0px 0px 25px",
            }}
            pl="8px"
            w="80%"
            textAlign={"left"}
          >
            Built for small teams to work at a fast pace without a lot of
            overhead
          </Text>
          <Flex
            m={{
              base: "5px 0px 0px 30px",
              md: "5px 0px 0px 30px",
              lg: "5px 0px 0px 20px",
            }}
            gap="20px"
          >
            <Text
              fontSize={{ base: "48px", md: "48px", lg: "48px" }}
              color="#E57CD8"
            >
              {annual1}
            </Text>
            <Text fontSize={{ base: "", md: "", lg: "12px" }} mt="25px">
              per user per month
            </Text>
          </Flex>
          <Divider w={{ base: "", md: "700px", lg: "200px" }} m="auto" mt={5} />
          <Box
            fontSize={{ base: "14px", md: "14px", lg: "14px" }}
            p={{ base: "5px", md: "", lg: "5px" }}
            w={{ base: "80%", md: "80%", lg: "80%" }}
            m={{
              base: "5px 0px 0px 20px",
              md: "5px 0px 0px 40px",
              lg: "5px 0px 0px 20px",
            }}
            textAlign={"left"}
          >
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Everything in Free +</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Billable rates</Box>{" "}
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Time rounding for reports</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Favorite time entries</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Create Saved Reports for quick online access</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Project time estimates and alerts</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Tasks (Sub-projects)</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Pre-populated project templates</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>View tracked time in your calendar</Box>
            </Flex>
          </Box>
          <Button
            fontSize={{ base: "", md: "", lg: "16px" }}
            borderRadius="30px"
            w={{ base: "300px", md: "700px", lg: "230px" }}
            p="25px"
            bg="#2c1338"
            mb={{ base: "20px", md: "20px", lg: "" }}
            _hover={{ bg: "#412A4C", border: "1px solid white" }}
            mt={{ base: "30px", md: "40px", lg: "120px" }}
            onClick={()=>navigate("/timer")}
          >
            Get started
          </Button>
        </Box>
        {/* **** */}
        <Box
          w={{ base: "90%", md: "", lg: "24%" }}
          border="1px solid white"
          bg="#FFF3ED"
          color={"black"}
          m={{ base: "auto" }}
        >
          <Text
            fontSize={{ base: "19.2px", md: "19.2px", lg: "24px" }}
            w="80%"
            m={{
              base: "25px 0px 0px -80px",
              md: "25px 0px 0px -232px",
              lg: "25px 0px 0px -30px",
            }}
            fontWeight="bold"
            color="#E57CD8"
          >
            Premium
          </Text>
          <Text
            fontSize={{ base: "15.2px", md: "15.2px", lg: "15.36px" }}
            m={{
              base: "5px 0px 0px 20px",
              md: "5px 0px 0px 25px",
              lg: "5px 0px 0px 25px",
            }}
            pl="8px"
            w="80%"
            textAlign={"left"}
          >
            Powerful tools to keep growing teams aligned and agile
          </Text>
          <Flex
            m={{
              base: "5px 0px 0px 30px",
              md: "5px 0px 0px 30px",
              lg: "5px 0px 0px 20px",
            }}
            gap="20px"
          >
            <Text
              fontSize={{ base: "48px", md: "48px", lg: "48px" }}
              color="#E57CD8"
            >
              {annual2}
            </Text>
            <Text fontSize={{ base: "", md: "", lg: "12px" }} mt="25px">
              per user per month
            </Text>
          </Flex>
          <Box color={"black"}>
            <Divider
              w={{ base: "", md: "700px", lg: "200px" }}
              m="auto"
              mt={5}
            />
          </Box>

          <Box
            fontSize={{ base: "14px", md: "14px", lg: "14px" }}
            p={{ base: "5px", md: "", lg: "5px" }}
            w={{ base: "80%", md: "80%", lg: "80%" }}
            m={{
              base: "5px 0px 0px 30px",
              md: "5px 0px 0px 40px",
              lg: "5px 0px 0px 20px",
            }}
            textAlign={"left"}
          >
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Everything in Starter +</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Team time tracking reminders</Box>{" "}
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Schedule saved reports via email</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Time tracking audits</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Project forecasts and analysis</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>
                Centralized control of labor costs and billable rates for team
                members
              </Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Lock time entries and add time for team members</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Set required fields for time entries</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Single sign-on (SSO)</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Native Jira and Salesforce integrations</Box>
            </Flex>
          </Box>
          <Button
            fontSize={{ base: "", md: "", lg: "16px" }}
            borderRadius="30px"
            w={{ base: "300px", md: "700px", lg: "230px" }}
            p="25px"
            bg="#E57CD8"
            mt={{ base: "30px", md: "40px", lg: "30px" }}
            mb={{ base: "20px", md: "20px", lg: "" }}
            _hover={{ bg: "#412A4C", border: "1px solid white" }}
            color="white"
            onClick={()=>navigate("/timer")}
          >
            Get started
          </Button>
        </Box>
        {/* **** */}

        <Box
          w={{ base: "90%", md: "90%", lg: "24%" }}
          border="1px solid white"
          bg="#412A4C"
          m={{ base: "auto", md: "auto" }}
        >
          <Text
            fontSize={{ base: "19.2px", md: "19.2px", lg: "24px" }}
            w="85%"
            m={{
              base: "25px 0px 0px -60px",
              md: "25px 0px 0px -228px",
              lg: "25px 0px 0px -25px",
            }}
            fontWeight="bold"
          >
            Enterprise
          </Text>
          <Text
            fontSize={{ base: "15.2px", md: "15.2px", lg: "15.36px" }}
            m={{
              base: "5px 0px 0px 25px",
              md: "5px 0px 0px 25px",
              lg: "5px 0px 0px 25px",
            }}
            pl="8px"
            w="80%"
            textAlign={"left"}
          >
            Tailored solutions for your large or complex organization
          </Text>
          <Flex
            m={{
              base: "5px 0px 0px 30px",
              md: "5px 0px 0px 30px",
              lg: "5px 0px 0px 20px",
            }}
            gap="20px"
          >
            <Text
              fontSize={{ base: "48px", md: "48px", lg: "48px" }}
              color="#E57CD8"
            >
              ~
            </Text>
            <Text fontSize={{ base: "", md: "", lg: "12px" }} mt="25px">
              Custom pricing. Unlimited users.
            </Text>
          </Flex>
          <Divider w={{ base: "", md: "700px", lg: "200px" }} m="auto" mt={5} />
          <Box
            fontSize={{ base: "14px", md: "14px", lg: "14px" }}
            p={{ base: "", md: "", lg: "5px" }}
            w={{ base: "80%", md: "80%", lg: "80%" }}
            m={{
              base: "5px 0px 0px 40px",
              md: "5px 0px 0px 40px",
              lg: "5px 0px 0px 20px",
            }}
            textAlign={"left"}
          >
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Everything in Premium +</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Manage multiple workspaces under one Organization</Box>{" "}
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Priority support</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Expert training and assistance</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Customizable solutions</Box>
            </Flex>
            <Flex gap={5} mt="9px">
              <Box color={"#E57CD8"} fontSize="20px">
                <BsCheckLg />
              </Box>
              <Box>Volume discounts for large teams on our annual plan</Box>
            </Flex>
          </Box>
          <Button
            fontSize={{ base: "", md: "", lg: "16px" }}
            borderRadius="30px"
            w={{ base: "300px", md: "700px", lg: "230px" }}
            p="25px"
            bg="#2c1338"
            mt={{ base: "30px", md: "40px", lg: "230px" }}
            mb={{ base: "20px", md: "20px", lg: "" }}
            _hover={{ bg: "#412A4C", border: "1px solid white" }}
            onClick={()=>navigate("/BookDemo")}
          >
            Book a demo
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default PricesTop;
