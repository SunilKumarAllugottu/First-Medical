import React from 'react'
import { Box } from '@mui/material'
import DataUp from './DataUp'
import MiniDrawer from '../Components/MiniDrawer'

const Upcomming = () => {
  return (
    <>
    <MiniDrawer/>

    <div component="main" >
    <div className='container mt-3'>
    <div className='row'>
      <div className='col-md'>
       <h1 style={{fontWeight:"900"}}>Upcoming Rides </h1>
      </div>
      {/* <div className='col-md'></div> */}
    <Box height={50} />
    <div><DataUp/> </div>

    </div>
    </div>
    </div>
    </>
    
  )
}

export default Upcomming;

