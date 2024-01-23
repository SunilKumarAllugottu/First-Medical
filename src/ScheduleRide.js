import React from 'react'
import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';
import { useNavigate } from 'react-router-dom';


const ScheduleRaide = () => {
  const navigate = useNavigate();

  return (
    <>
    <NavBar/>
    <div style={{marginTop:'60px'}}/>
    <div style={{ display: 'flex' }}>
    <SideBar/>
    <div component="main" style={{ flexGrow: 1, padding:"65px"  }}>
    <div className='container mt-3'>
      <div className='row'>
      <div className='col-md'>
        <h1 style={{fontWeight:"900"}}>Schedule a Ride</h1>
        </div>
      <div className='col-md' style={{display:"flex",flexDirection:"column",justifyContent:"end",alignItems:"end"}}>
        <button  style={{backgroundColor:"#0054A4", color:"#FFFFFF", padding:"8px 15px 8px 15px",border:"none", borderRadius:"5px"}} onClick={()=>navigate("/Newrequest")}>New Request</button>
        </div>
        </div>
    </div>
    </div>
    
    </div>
    </>
  )
}

export default ScheduleRaide;