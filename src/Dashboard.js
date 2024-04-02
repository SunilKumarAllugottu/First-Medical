import React from 'react'
import "./Dashboard.css"
import { Box, Toolbar } from '@mui/material';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import MapContainer from './MapContainer';
import MiniDrawer from './Components/MiniDrawer';


const Dashboard = () => {
  return (

    <>
    <div className='main'>
    <MiniDrawer/>
      <div component="main"  >
      <div className='container mt-3'>
      <div className='row'>
      <div className='col-md'>
        <h1 style={{fontWeight:"900"}}>Dashboard <span style={{color:'#888888'}}>Admin panel</span></h1>
      </div>
      <Box height={25}/>


    <div className="container-fluid mt-3 " style={{marginLeft:"2%"}}> 
      <div className='row'>
        <div className="col">
      <Card className='wide' style={{backgroundColor:"#00CCBB"}}>
          <div className='center'>  

            <p className='head'>
                        ONGOING RIDES
            </p>
          
          </div>
              <h5 className="caerd-title  title" >
                  <CountUp duration={0.9} delay={0.2} end={15}/> </h5>
      </Card>
      </div>
      <br/><br/><br/><br/><br/><br/>
        

      <div className="col">
      <Card className='wide' style={{backgroundColor:"#0054A4"}}>
          <div  className='center'>

          <p className='head'>
                    RIDE REQUESTS
          </p>
          </div>
              <h5 className="caerd-title  title" >
              <CountUp duration={0.9} delay={0.2} end={15}/></h5>
      </Card>
      </div>
      <br/><br/><br/><br/><br/><br/>


      <div className="col">
      <Card className='wide' style={{backgroundColor:"#07AC2E"}}>
          <div  className='center'>

          <p className='head'>
                        NO.OF DRIVERS
          </p>
        </div>
              <h5 className="caerd-title  title" >
                  <CountUp duration={0.9} delay={0.2} end={15}/></h5>
      </Card>
      </div>
      <br/><br/><br/><br/><br/><br/>
      

      <div className="col">
      <Card className='wide' style={{backgroundColor:"#B7780A"}}>
          <div className='center'>
            <p className='head'>
                        DRIVERS ONLINE
            </p>
          </div>
              <h5 className="caerd-title  title" >
                        <CountUp duration={0.9} delay={0.2} end={15}/>
              </h5>
      </Card>
      </div>
      <br/><br/><br/><br/><br/><br/>


      <div className="col">
      <Card className="wide" style={{backgroundColor:"#A10C3E"}}>
          <div className='center'>          
            <p className='head'>
                        NO.OF RIDERS
            </p>
          </div>
              <h5 className="caerd-title  title"> 
              <CountUp duration={0.9} delay={0.2} end={15}/>
              </h5>
      </Card>
      </div>
      <br/><br/><br/><br/><br/><br/>


    <div className="col">
      <Card className="wide" style={{backgroundColor:"#5A0D9C"}}>
          <div  className='center'>         
              <p className='head'>
                        NO.OF USERS
              </p>
          </div>
            <h5 className="caerd-title  title">
            <CountUp duration={0.9} delay={0.2} end={15}/>
            </h5>
      </Card>
    </div>
      <br/><br/><br/><br/><br/><br/>

    </div>
    </div>
    <Box height={10}/>
    <MapContainer/>
    <Toolbar/>
      </div>
    </div>
    </div>
  </div>
</>
  )
}

export default Dashboard;