import React from 'react'
import { Box, Toolbar } from '@mui/material';
import Driverlist from './Driverlist';
import MiniDrawer from '../Components/MiniDrawer';


const Drivers = () => {
  return (
    
  <>
    
    <MiniDrawer/>
    <div component="main" >
    <div className='container mt-3'>
    <div className='row'>
        <div className='col-md'>
          <h1 style={{fontWeight:"900"}}>Drivers</h1>
        </div>
        <Toolbar/>
        <div ><Driverlist/></div>
    </div>
    </div>
    </div>
    <Toolbar/>
  </>
  )}
export default Drivers;