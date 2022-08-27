import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Project from '../Components/NavComponents/Project/Project'
import Sidebar from "../Components/sidebar/Sidebar"
import TopNav from '../Components/TimerPage/TopNav'
import Client from"../Components/NavComponents/Client/Client"

const Sidebarroutes = () => {
  return (
    <div>
       <Sidebar/>
       <Routes>
        <Route path = "/timer" element={<TopNav/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/client" element={<Client/>}/>
       </Routes>

    </div>
  )
}

export default Sidebarroutes