import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { BsCheckLg } from "react-icons/bs";

const PlanComparison = () => {
  return (
    <Box w={{ lg: "80%" }} m="auto" textAlign={"center"}>
      <Text
        fontSize={{ lg: "44.99px", md: "35px", base: "25px" }}
        mt={{ lg: "70px", base: "50px", md: "70px" }}
        mb={{ lg: "40px", md: "40px", base: "30px" }}
      >
        Full Plan Comparison
      </Text>

      <Box>
        <TableContainer border={"1px solid white"}>
          <Table size="sm" bg="#fff3ed">
            <Thead>
              <Tr>
                <Td border={"1px solid #bcb8b1"}></Td>
                <Td
                  border={"1px solid #bcb8b1"}
                  fontWeight={{ lg: "bold" }}
                  textAlign="center"
                >
                  <Text
                    fontSize={{ lg: "19.2px" }}
                    m={{ lg: "8px" }}
                    color="#2c1338"
                  >
                    Free
                  </Text>
                  <Button
                    bg="black"
                    color={"white"}
                    m={{ lg: "4px" }}
                    w={{ lg: "150px" }}
                  >
                    Get started
                  </Button>
                </Td>

                <Td
                  border={"1px solid #bcb8b1"}
                  textAlign="center"
                  fontWeight={{ lg: "bold" }}
                >
                  <Text
                    fontSize={{ lg: "19.2px" }}
                    color="#2c1338"
                    m={{ lg: "8px" }}
                  >
                    Starter
                  </Text>
                  <Button bg="black" color={"white"} m={{ lg: "8px" }}>
                    Get started
                  </Button>
                </Td>

                <Td
                  border={"1px solid #bcb8b1"}
                  textAlign="center"
                  bg="#fce5d8"
                  fontWeight={{ lg: "bold" }}
                >
                  <Text
                    fontSize={{ lg: "19.2px" }}
                    color="#2c1338"
                    m={{ lg: "8px" }}
                  >
                    Premium
                  </Text>
                  <Button bg="#e57cd8" color={"white"} m={{ lg: "8px" }}>
                    Get started
                  </Button>
                </Td>
                <Td
                  border={"1px solid #bcb8b1"}
                  textAlign="center"
                  fontWeight={{ lg: "bold" }}
                >
                  <Text
                    fontSize={{ lg: "19.2px" }}
                    color="#2c1338"
                    m={{ lg: "8px" }}
                  >
                    Enterprise
                  </Text>
                  <Button bg="black" color={"white"} m={{ lg: "8px" }}>
                    Get started
                  </Button>
                </Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr bg="#564260">
                <Td fontSize={{ lg: "20px" }} p={{ lg: "20px" }}>
                  Time Tracking
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Web app, mobile apps, and desktop apps
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Pomodoro timer
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Idle time detection
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Personal time tracking reminders
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Automated time tracking triggers
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Personal desktop activity tracking
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Favorite time entries
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>

              {/* Time tracking */}

              <Tr bg="#564260">
                <Td fontSize={{ lg: "20px" }} p={{ lg: "20px" }}>
                  Team Management
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Overview of team activity
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  User groups
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Team access level management
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Team time tracking reminder emails
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}></Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Add time for team members
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Manage team member billable rates and labor costs
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Single Sign-On (SSO)
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>

              {/* Reporting */}

              <Tr bg="#564260">
                <Td fontSize={{ lg: "20px" }} p={{ lg: "20px" }}>
                  Reporting
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Exportable Summary, Detailed, and Weekly reports
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  CSV imports
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  XLS export
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Billable rates
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Time rounding for reports
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Custom company logo
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>{" "}
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Saved Reports
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>

              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Schedule saved reports via email
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Set required fields for time entries
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}></Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Limit tag access
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}></Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Lock time entries
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Historical billable rates
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Time entry audits
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>

              {/* project mangment */}

              <Tr bg="#564260">
                <Td fontSize={{ lg: "20px" }} p={{ lg: "20px" }}>
                  Project Management
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Unlimited projects and clients
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Pre-populated project templates
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Tasks (sub-projects)
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Project time estimates and alerts
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Recurring projects
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Project forecasts and analysis
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PlanComparison;
