import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Footer from '../Components/Homepage/Footer'
import Homepage from '../Components/Homepage/Homepage'
import Navbar from "../Components/NavComponents/Navbar"
import BookDemo from '../Components/prices/BookDemo'
import BookingConfirm from '../Components/prices/BookingConfirm'
import ChooseToggleTime from '../Components/prices/ChooseToggleTime'
import Prices from '../Components/prices/Prices'
import ToggleBook from '../Components/prices/ToggleBook'
import YourInfo from '../Components/prices/YourInfo'
import Login from '../Components/Loging/Login'
import Signupm from "../Components/Loging/Signupm"

import { Stack } from '@chakra-ui/react'
import Sidebar from "../Components/sidebar/Sidebar"
import TopNav from '../Components/TimerPage/TopNav'
import Project from '../Components/NavComponents/Project/Project'
import Client from '../Components/NavComponents/Client/Client'
// import TopNav from '../../Components/TimerPage/TopNav'
const Navroutes = () => {
  return (
    <div>
        {/* <Navbar/> */}
      <Routes>
         <Route path="/" element={<Homepage/>}/>
         <Route path="/BookingConfirm" element={<BookingConfirm/>} />
         <Route path="/BookDemo" element={<BookDemo/>} />
         <Route path="/ChooseToggleTime" element={<ChooseToggleTime/>} />
         <Route path="/YourInfo" element={<YourInfo/>} />
         <Route path="/ToggleBook" element={<ToggleBook/>} />
         <Route path="/Prices" element={<Prices/>} />
         <Route path="/login" element={<Login/>} />
         <Route path='/signup' element={<Signupm/>}/>
         {/* <Route path="/timers" element={<Sidebarroutes/>} /> */}
           <Route path="/timer" element={
            <Stack direction="column" gap="20px">
            <Sidebar/>
            <TopNav  />
           </Stack>}/>
           <Route path="/project" element={
            <Stack direction="row" gap="13%">
            <Sidebar/>  
            <Project/>
           </Stack>} />
           <Route path="/client" element={
            <Stack direction="row" gap="13%" >
            <Sidebar/>  
            <Client/>
           </Stack>} />
      </Routes>
      
  {/* <Footer/> */}

    </div>
  )
}

export default Navroutes