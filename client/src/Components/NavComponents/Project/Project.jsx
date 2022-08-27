import React, { useState,useEffect } from 'react';
import style from './project.module.css';
import { Select,Stack,FormControl,FormLabel,Input,Button, Center } from '@chakra-ui/react'
import { IoIosPerson,IoLogoUsd,IoIosPeople,IoMdListBox,IoMdSwitch,IoMdArrowDropdown} from "react-icons/io";
import { FaFirstOrderAlt } from "react-icons/fa";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Switch
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
// import { postdata } from '../../TimerPage/api';
import axios from "axios"
import { AiFillDelete } from 'react-icons/ai';


const Project = () => {
  var token=localStorage.getItem("token")
  console.log(token)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [name, setName] = useState("");
  const [client,setClient] = useState("");

  //let data = [{name:"Testing",client: "masai",time:"10 Hrs",status:"false",team:"pratik"},{name:"Testing",client: "masai",time:"10 Hrs",status:"false",team:"pratik"}];
 
  const[data,setData]=useState([])
  const getdata = () => {
    axios.get("https://damp-reef-46945.herokuapp.com/project",{
     headers:{
       "authorization":token
     }
    }).then((res) => setData(res.data));
   
  };
  const handleSubmit = () => {
    const payload = {
      id:Date.now(),
      name:name,
      client:client,
    }
    
  axios
    .post("https://damp-reef-46945.herokuapp.com/project/create", payload,{
      headers:{
        "authorization":token
      }
    })
    .then((res) => console.log(" data done"));
    

  }
  useEffect(()=>{
    getdata()
  },[handleSubmit])
  const deletedata=(id)=>{
    axios
    .delete(`https://damp-reef-46945.herokuapp.com/project/delete/${id}`,{
      headers:{
        "authorization":token
      }})
    .then((res) => console.log("delete done"));
  }
  
  

  return (
    <div className={style.container}>
        <div className={style.top1} >
            <p>Projects</p>
            <button className={style.newBtn} onClick={onOpen}>+ New Project</button>
            <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} >
            <FormControl >
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} placeholder='Project name' value={name} onChange={(e) => {setName(e.target.value)}}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Client name</FormLabel>
              <Input placeholder='Client' value={client} onChange={(e) => {setClient(e.target.value)}} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Template</FormLabel>
              <Input placeholder='Template' />
            </FormControl>

            <FormControl  mt={4} display='flex' alignItems='center' justifyContent={"space-between"}>
                <FormLabel >
                     Private
                </FormLabel>
                <Switch id='email-alerts' colorScheme={"pink"}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='pink' width={"100%"} onClick={handleSubmit}>
              Create Project
            </Button>
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>

        </div>

        <div className={style.top2}>
            <Stack spacing={3} border={"1px solid grey"} width="121px" padding={"5px"} borderRadius="10px">
                <Select placeholder='Show active' variant='unstyled' width="121px" >
                    <option value='Active'>Active</option>
                    <option value='Archived'>Archived</option>
                    <option value='Both'>Both</option>
                </Select>
            </Stack> 

            <div className={style.filter}>
                Filter by:
                <div> <IoIosPerson style={{marginTop:"4px"}}/>Client</div>
                <div><IoIosPeople style={{marginTop:"4px"}}/>Team</div>
                <div> <IoLogoUsd style={{marginTop:"4px"}} />Billable</div>
                <div><IoMdListBox style={{marginTop:"4px"}} />Project name</div>
            </div>   
        </div>

        <div className={style.top3}>
            <div>
                <button className={style.bulkBtn}> <IoMdSwitch style={{marginTop:"4px"}}/>Bulk edit</button>
            </div>

            <div className={style.title}>
                <div>PROJECT <IoMdArrowDropdown style={{marginTop:"4px"}}  /></div>
                <div>CLIENT <IoMdArrowDropdown style={{marginTop:"4px"}}  /></div>
                <div>TIME STATUS <IoMdArrowDropdown style={{marginTop:"4px"}}  /></div>
                <div>BILLABLE STATUS <IoMdArrowDropdown style={{marginTop:"4px"}}  /></div>
                <div>TEAM <IoMdArrowDropdown style={{marginTop:"4px"}}  /></div>
            </div>

        </div>
        <div >
          { data.length>0 &&
            data?.map((item) => (
              <div className={style.map}>
                <div style={{display:"flex",gap:"5px"}} key={item.id} > <FaFirstOrderAlt style={{marginTop:"4px",marginLeft:"-20%"}}  /> {item.name}  </div>
                <div>{item.client}</div>
                <div>00h</div>
                <div> 0 </div>
                <div> {item.name} </div>
                <Center>
              <AiFillDelete  onClick={()=>{
                deletedata(item.id) 
                getdata()}}/>
            </Center>

              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Project