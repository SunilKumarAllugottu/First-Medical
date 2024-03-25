import React from 'react'
import SideBar from '../Components/SideBar';
import NavBar from '../Components/NavBar';
import { Box } from '@mui/material';
import DataOngoing from './DataOngoing';
import MiniDrawer from '../Components/MiniDrawer';


const OngoingRide = () => {
  return (
    <>
    <MiniDrawer/>
    <div component="main" >
    <div className='container mt-3'>
    <div className='row'>
      <div className='col-md'>
       <h1 style={{fontWeight:"900"}}>Ongoing Raide </h1>
      </div>
        <Box height={50}/>
        <div><DataOngoing/></div>
    </div>
    </div>
    </div>
    </>
  )
}

export default OngoingRide;