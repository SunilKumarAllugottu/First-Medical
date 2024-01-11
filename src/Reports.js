import React from 'react'
import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';
import { Box } from '@mui/material';


const Reports = () => {
  return (
    <>
    <NavBar/>
    <Box height={50}/>
        <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>Reports</h1>
      </Box>
    </Box>
    
    
    </>
  )
}

export default Reports;