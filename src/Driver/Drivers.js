import React from 'react'
import SideBar from './Components/SideBar';
import { Box } from '@mui/material';
import NavBar from './Components/NavBar';
import Driverlist from './Data/Driverlist';


const Drivers = () => {
  return (
    
    <>
    <div >
    <NavBar/>
    <div style={{marginTop:'60px'}}/>
    <div style={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{ flexGrow: 1, p:10  }}>

    <h1 style={{fontWeight:"900"}}>Drivers </h1>

     <Driverlist/>
    </Box>
    </div>
    </div>
    </>
  )}
export default Drivers;