import React, { useState } from "react";
import style from "./navbar.module.css";
import Product from "./Product";
import Track from "./Track";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Career from "./Career";
import { Link } from "react-router-dom";

//importing Pratik res
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from '../components/responsive Nav/navElements'
import { useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {ChevronRightIcon } from '@chakra-ui/icons'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const navigate=useNavigate()
  // console.log("nav:", nav);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  return (
    <>
    <Nav>
    
    <div
      className={style.navbar_main}
      
      style={
        nav === true
          ? { backgroundColor: "#FCE5D8", color: "black"}
          : { backgroundColor: "rgb(44, 19, 56)" }
      }
    >
      <div className={style.navbar_main1} style ={{marginRight:"20%"}} >
        <div className={style.navbar_sub2}  >
          <NavLink to ="/">
            <Link to={"/"} >
              <h1
              style={{
                fontSize: "30px",
                margin: "0px 10px",
                color: "#e57cd8",
                fontWeight: "700",
              }}
            >
              toggl track
            </h1>
            </Link>
          </NavLink>

          <Bars onClick={onOpen} />
          {/* Drawer */}

          <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
            <DrawerOverlay />
              <DrawerContent backgroundColor={"#FCE5D8"}>
                <DrawerHeader borderBottom='1px solid grey'>
                  <h1
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                      color: "#e57cd8",
                      fontWeight: "700",
                    }}
                  >
                    toggl track
                  </h1>
                  </DrawerHeader>
                <DrawerBody padding={"20px"}>
                  <p style={{padding:"10px 0px 10px 10px"}}>Products <ChevronRightIcon/></p>
                  
                  <p style={{padding:"10px 0px 10px 10px"}}>Pricing </p>
                  <p style={{padding:"10px 0px 10px 10px"}}>Why Track? <ChevronRightIcon/></p>
                  <p style={{padding:"10px 0px 10px 10px"}}>Careers <ChevronRightIcon/></p>
                  <p style={{padding:"10px 0px 10px 10px"}}>Book a Demo </p>

                  <div>
                    <button>Try for free</button>
                  </div>
                </DrawerBody>
              </DrawerContent>
        </Drawer>

          {/* Drawer Ends */}

          <NavMenu >
          

          <Accordion
            allowToggle
            display="flex"
            
            style={
              
              nav === false
                ? { borderTop: "0px solid #FCE5D8" }
                : { borderTop: "0px solid rgb(44, 19, 56)" }
            }
            className={style.toogle1} >

            <NavLink to = "/produts">
          
            <AccordionItem style={{border:"none"}}>
              <h2 >
                <AccordionButton
                  background="rgb(44, 19, 56) "
                  border="#412a4c "
                  
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  
                >
                  <Box
                    onClick={() => {
                      setNav(!nav);
                    }}
                    flex="1"
                    lineHeight="30px"
                    fontSize="15px"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    background="rgb(44, 19, 56); "
                    color="#ece1d7"
                    
                  >
                    Product
                  </Box>
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                    fontWeight="bold"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1}>
                <div >
                  <Product />
                </div>
              </AccordionPanel>
            </AccordionItem>
            </NavLink>

            <NavLink to = "/Pricing">         
            <AccordionItem style={{border:"none"}}>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                >
                  <Link to={"/price"}>
                    <Box
                      flex="1"
                      lineHeight="30px"
                      fontSize="15px"
                      style={
                        nav === true
                          ? { backgroundColor: "#FCE5D8", color: "black" }
                          : null
                      }
                      background="rgb(44, 19, 56); "
                      color="#ece1d7"
                    >
                      Pricing
                    </Box>
                  </Link>
                </AccordionButton>
              </h2>
            </AccordionItem >
            </NavLink>
            
            <NavLink to = "/track">
            <AccordionItem style={{border:"none"}}>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                >
                  <Box
                    onClick={() => {
                      setNav(!nav);
                    }}
                    flex="1"
                    lineHeight="30px"
                    fontSize="15px"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    background="rgb(44, 19, 56); "
                    color="#ece1d7"
                  >
                    WhyTrack
                  </Box>
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1}>
                <div className={style.navbar_track}>
                  <Track />
                </div>
              </AccordionPanel>
            </AccordionItem>
            </NavLink>

            <div className={style.line}></div>
            <NavLink to = "/career">
            <AccordionItem style={{border:"none"}}>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                >
                  <Box
                    onClick={() => {
                      setNav(!nav);
                    }}
                    flex="1"
                    lineHeight="30px"
                    fontSize="15px"
                    textAlign="left"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    background="rgb(44, 19, 56); "
                    color="#ece1d7"
                  >
                    Careers
                  </Box>
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                    fontWeight="bold"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1}>
                <div className={style.navbar_careers}>
                  <Career />
                </div>
              </AccordionPanel>
            </AccordionItem>
            </NavLink>


            <div className={style.line}></div>
          </Accordion>
          </NavMenu>

        
        </div> 
      </div>
  

      <NavBtn >
      {/* <div className={style.navbar_main2}>

      <NavLink to = "/demo">
        <div
          className={style.navbar_book}
          style={
            nav === true ? { backgroundColor: "#FCE5D8", color: "black" } : null 
          }>
        
          <Link to={"/demo"}>Book a demo</Link>
        </div>
        </NavLink>

        <div className={style.navbar_hr}></div>
        <NavLink to = "/login">
        <div
          className={style.navbar_log}
          style={
            nav === true ? { backgroundColor: "#FCE5D8", color: "black" } : null
          }
        >
          {" "}
          <Link to={"/login"}>Log in</Link>
        </div>
        </NavLink>

        <NavBtnLink to="/signin">
        {/* <button
          className={style.navbar_free}
          style={
            nav === true
              ? { backgroundColor: "#E57CD8", color: "black", border: "none" }
              : {
                  backgroundColor: "#FFF3ED",
                  color: "#E57CD8",
                  border: "none ",
                }
          }
        >
          try for free
        </button> */}
        {/* Try for free
        </NavBtnLink>
      </div> */} 

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
    </div>
    
    </Nav>

    </>
  );
};

export default Navbar;