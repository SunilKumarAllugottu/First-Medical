import React from 'react'
import SideBar from './Components/SideBar';
import { Box } from '@mui/material';
import NavBar from './Components/NavBar';


const Vehicles = () => {
  return (
    <>
    <NavBar/>
    <Box height={50}/>
        <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>Vehicles</h1>
      </Box>
    </Box>
    
    
    </>
  )
}

export default Vehicles;