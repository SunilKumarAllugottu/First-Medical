import React from 'react'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import { Box } from '@mui/material'

const Upcomming = () => {
  return (
    <>
    <NavBar/>
    <div style={{marginTop:'60px'}}/>
    <div style={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{ flexGrow: 1, p:10  }}>

    <h1 style={{fontWeight:"900"}}>Upcoming Rides </h1>

    </Box>
    </div>
    </>
    
  )
}

export default Upcomming;

