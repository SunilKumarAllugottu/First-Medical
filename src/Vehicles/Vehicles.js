import React from 'react'
import SideBar from '../Components/SideBar';
import { Box } from '@mui/material';
import NavBar from '../Components/NavBar';
import Vehiclelist from './VehicleList';
import MiniDrawer from '../Components/MiniDrawer';


const Vehicles = () => {
  return (
  <>
    <MiniDrawer/>
    <div component="main" >
    <div className='container mt-3'>
    <div className='row'>
      <div className='col-md'>
        <h1 style={{fontWeight:"900"}}>Vehicles </h1>
      </div>
          <Box height={50}/>
          <div><Vehiclelist/></div>
    </div>
    </div>
    </div>
  </>
  )
}

export default Vehicles;