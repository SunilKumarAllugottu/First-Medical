import React from 'react'
import SideBar from './Components/SideBar';
import { Box } from '@mui/material';
import NavBar from './Components/NavBar';


const Drivers = () => {
  return (
    <>
    <NavBar/>
    <Box height={50}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Drivers</h1>
      </Box>
    </Box>
    
    
    </>
  )
}

export default Drivers;