import React from 'react'
// import { NavLink } from 'react-router-dom'
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from './navElements'

const ResNavbar = () => {
  return (
    <>
    <Nav>
        <NavLink to ="/">
            <h1 style={{fontSize:"50px",color:"#E57CD8",fontWeight:"bolder"}}>toggl</h1><p style={{fontSize:"50px",color:"#E57CD8"}}>track</p>
        </NavLink>
        <Bars/>
        <NavMenu>
            <NavLink to = "/produts">
            Produts
            </NavLink>
            <NavLink to = "/Pricing">
            Pricing
            </NavLink>
            <NavLink to = "/track">
            Why Track
            </NavLink>
            <NavLink to = "/career">
            Careers
            </NavLink>
        </NavMenu>

        <NavBtn style={{marginLeft:"30% "}}>
            
            <NavLink to = "/demo">
            Book a demo  
            
            </NavLink>
            
            
            <NavLink to = "/login">
            Login
            </NavLink>
            <NavBtnLink to="/signin">
                Try for free
            </NavBtnLink>
        </NavBtn>
    </Nav>
    </>
  )
}

export default ResNavbar