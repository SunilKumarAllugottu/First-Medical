import React from 'react'
import { useNavigate } from 'react-router-dom';
import DataSchedule from './DataSchedule';
import { Box } from '@mui/material';
import MiniDrawer from '../Components/MiniDrawer';


const ScheduleRide = () => {
  const navigate = useNavigate();

  return (
  <>
    <MiniDrawer/>
    <div className="main" >
    <div className='container mt-3'>
      <div className='row'>
      <div className='col-md'>
        <h1 style={{fontWeight:"900"}}>Schedule a Ride</h1>
        </div>
      <div className='col-md' style={{display:"flex",flexDirection:"column",justifyContent:"end",alignItems:"end"}}>
        <button className='btn' style={{backgroundColor:"#0054A4", color:"#FFFFFF",}} onClick={()=>navigate("/Newrequest")}>New Request</button>
        </div>
        <Box height={50}/>
        <div><DataSchedule/></div>
      </div>
    </div>
    </div>
  </>
  )
}

export default ScheduleRide;