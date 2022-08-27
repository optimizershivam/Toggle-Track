import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import BookDemo from "./BookDemo";
import BookingConfirm from "./BookingConfirm";
import ChooseToggleTime from "./ChooseToggleTime";
import Prices from "./Prices";
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
         <Route path="/Prices" element={<Prices/>} />
     </Routes>
  </Box>;
};

export default MainRotes;
