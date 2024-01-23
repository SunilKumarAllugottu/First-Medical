import React from 'react'
import SideBar from './Components/SideBar';
import { Box } from '@mui/material';
import NavBar from './Components/NavBar';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';


const Dashboard = () => {
  return (
    <>
    <NavBar/>
    <div style={{marginTop:'60px'}}/>
        <div style={{ display: 'flex' }}>
    <SideBar/>


      <Box component="main" sx={{ flexGrow: 1, p:10  }}>
        <h1 style={{fontWeight:"900"}}>Dashboard <span style={{color:'#888888'}}>Admin panel</span></h1>
      <Box height={50}/>
    <div className="container mt-3 ">
      <div className='row'>
        <div className="col-md ">
      <Card style={{maxWidth:"350px", minHeight:"150px",backgroundColor:"#F1F1F1"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>       
           <p style={{color:"#FFFFFF",borderRadius:"10px" , fontSize:"18px", padding:"5px",backgroundColor:"#06988C",marginTop:"20px",}}>&emsp;&emsp;&emsp;&emsp;ONGOING RIDES&emsp;&emsp;&emsp;&emsp;</p>
         </div>
           <div className="card-body">
             <h5 className="card-title" style={{fontSize:"44px"}}><CountUp duration={0.9} delay={0.2} end={15}/> </h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/><br/><br/>

      <div className="col-md ">
      <Card style={{maxWidth:"350px", minHeight:"150px",backgroundColor:"#F1F1F1"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <p style={{color:"#FFFFFF",borderRadius:"10px" , fontSize:"18px", padding:"5px",backgroundColor:"#045C9F",marginTop:"20px",}}>&emsp;&emsp;&emsp;&emsp;RIDE REQUESTS&emsp;&emsp;&emsp;&emsp;</p>
          </div>
           <div className="card-body">
             <h5 className="card-title" style={{fontSize:"44px"}} ><CountUp duration={0.9} delay={0.2} end={15}/></h5>
             {/* <p className="card-text">.</p> */}
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <div className="col-md ">
      <Card style={{maxWidth:"350px", minHeight:"150px",backgroundColor:"#F1F1F1"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <p style={{color:"#FFFFFF",borderRadius:"10px" , fontSize:"18px", padding:"5px",backgroundColor:"#07AC2E",marginTop:"20px",}}>&emsp;&emsp;TOTAL NO.OF DRIVERS&emsp;&emsp;</p>
        </div>
           <div className="card-body">
             <h5 className="card-title" style={{fontSize:"44px"}}><CountUp duration={0.9} delay={0.2} end={15}/></h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      </div>

      <div className='container mt-3'>
      <div className='row'>
      <div className="col-md ">
      <Card style={{maxWidth:"350px", minHeight:"150px",backgroundColor:"#F1F1F1"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>          <p style={{color:"#FFFFFF",borderRadius:"10px" , fontSize:"18px", padding:"5px",backgroundColor:"#B7780A",marginTop:"20px",}}>&emsp;&emsp;&emsp;&emsp;DRIVERS ONLINE&emsp;&emsp;&emsp;&emsp;</p>
</div>
           <div className="card-body">
             <h5 className="card-title" style={{fontSize:"44px"}}><CountUp duration={0.9} delay={0.2} end={15}/></h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/>
      <div className="col-md ">
      <Card style={{maxWidth:"350px", minHeight:"150px",backgroundColor:"#F1F1F1"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>          <p style={{color:"#FFFFFF",borderRadius:"10px" , fontSize:"18px", padding:"5px",backgroundColor:"#A10C3E",marginTop:"20px",}}>&emsp;&emsp;&emsp;TOTAL NO.OF RIDERS&emsp;&emsp;&emsp;</p>
</div>
           <div className="card-body">
             <h5 className="card-title" style={{fontSize:"44px"}}><CountUp duration={0.9} delay={0.2} end={15}/></h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/>
      <div className="col-md ">
      <Card style={{maxWidth:"350px", minHeight:"150px",backgroundColor:"#F1F1F1"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>          <p style={{color:"#FFFFFF",borderRadius:"10px" , fontSize:"18px", padding:"5px",backgroundColor:"#5A0D9C",marginTop:"20px",}}>&emsp;&emsp;&emsp;TOTAL NO.OF USERS&emsp;&emsp;&emsp;</p>
</div>
           <div className="card-body">
             <h5 className="card-title" style={{fontSize:"44px"}}><CountUp duration={0.9} delay={0.2} end={15}/></h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/>

    </div>
    </div>
      </Box>
    </div>

    </>
  )
}

export default Dashboard;