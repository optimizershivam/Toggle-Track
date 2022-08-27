import { Box } from "@chakra-ui/react";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import BookDemo from "./BookDemo";
import BookingConfirm from "./BookingConfirm";
import ChooseToggleTime from "./ChooseToggleTime";
import ToggleBook from "./ToggleBook";
import YourInfo from "./YourInfo";

const MainRotes = () => {
  return <Box>

     <Routes>
         <Route path="/BookingConfirm" element={<BookingConfirm/>} />
         <Route path="/BookDemo" element={<BookDemo/>} />
         <Route path="/ChooseToggleTime" element={<ChooseToggleTime/>} />
         <Route path="/YourInfo" element={<YourInfo/>} />
         <Route path="/ToggleBook" element={<ToggleBook/>} />
     </Routes>
  </Box>;
};

export default MainRotes;
