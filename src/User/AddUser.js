import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close"
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import { db } from "../Firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Swal from 'sweetalert2';
import { useAppStore } from '../appStore';


export default function AddUser ({closeEvent}) {
  const [driver,setDriver]=useState("");
  const [email,setEmail]=useState("");
  const [contact,setContact]=useState("");
  const [vehicle,setVehicle]=useState("");
  const [documents,setDocuments]=useState("");
  // const [rows, setRows] = useState([]);
  const setRows=useAppStore((state)=>state.setRows)
  const empCollectionRef = collection(db, "Driver");


const handleDriverChange = (event) =>{
  setDriver(event.target.value);
};
const handleEmailChange = (event) =>{
  setEmail(event.target.value);
};
const handleContactChange = (event) =>{
  setContact(event.target.value);
};
const handleVehicleChange = (event) =>{
  setVehicle(event.target.value);
};
const handleDocumentsChange = (event) =>{
  setDocuments(event.target.value);
};



  const createUser = async()=>{
    await addDoc(empCollectionRef,{
        driver:driver,
        email:email,
        contact:contact,
        vehicle:vehicle,
        documents:documents,
    });
     getUsers();
     closeEvent();
     Swal.fire("submitted" , "your file has been submited.","success")
    };
   const getUsers = async () => {
     const data = await getDocs(empCollectionRef);
     setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   };
  const currencies = [
    {
      value: 'Van',
      label: 'Van',
    },
    {
      value: 'Ambulance',
      label: 'Ambulance',
    },
  ];
  return (
  <>
  <Box sx={{m:2}}/>
       <Typography variant='h5' align='center' sx={{fontWeight:"900"}}>
         Add Driver
       </Typography>
       <IconButton 
              style={{ position:"absolute", top:"0", right:"0"}}
              onClick={closeEvent}>
         <CloseIcon/>
       </IconButton>
       <Box height={20}/>
       <Grid container spacing={2}>


       <Grid item xs={12}>
               <TextField id="outlined-basic" 
                          label="Driver Name" 
                          variant="outlined" 
                          size='small' 
                          value={driver}
                          onChange={handleDriverChange}
                          sx={{minWidth:"100%"}}
                          />
       </Grid>


       <Grid item xs={12}>
               <TextField id="outlined-basic" 
                          label="Email" 
                          variant="outlined" 
                          size='small' 
                          value={email}
                          onChange={handleEmailChange}
                          sx={{minWidth:"100%"}}
                          />
       </Grid>


       <Grid item xs={6}>
               <TextField id="outlined-basic" 
                          label="Contact" 
                          variant="outlined" 
                          size='small' 
                          value={contact}
                          onChange={handleContactChange}
                          sx={{minWidth:"100%"}}
                          />
       </Grid>


       <Grid item xs={6}>
               <TextField id="outlined-basic" 
                          label="Vehicle" 
                          variant="outlined" 
                          size='small' 
                          value={vehicle}
                          select
                          onChange={handleVehicleChange}
                          sx={{minWidth:"100%"}}
                >
                   {currencies.map((option) => (
                     <MenuItem key={option.value} value={option.value}>
                       {option.label}
                     </MenuItem>
                   ))}
                </TextField>
       </Grid>


       <Grid item xs={12}>
               <TextField id="outlined-basic" 
                          label="Documents" 
                          variant="outlined" 
                          size='small' 
                          value={documents}
                          onChange={handleDocumentsChange}
                          sx={{minWidth:"100%"}}
                          />
       </Grid>


       {/* <Grid item xs={12}>
               <TextField id="outlined-basic" label="Status" variant="outlined" size='small' sx={{minWidth:"100%"}}/>
       </Grid> */}


       <Grid item xs={12}>
          <Typography variant='h5' align="center">
            <Button variant='contained' onClick={createUser}>
              Submit
            </Button>
          </Typography>

       </Grid>

       </Grid>
  <Box sx={{m:4}}/>
  </>
  )
}

