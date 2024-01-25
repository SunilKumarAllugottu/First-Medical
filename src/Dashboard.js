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
      <Box height={25}/>
    <div className="container mt-3 ">
      <div className='row'>
        <div className="col-md ">
      <Card style={{maxWidth:"300px", maxHeight:"125px",backgroundColor:"#F1F1F1"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"200px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>  

           <p style={{color:"#FFFFFF",borderRadius:"10px", display:"flex",
                      flexDirection:"column",justifyContent:"center",
                      alignItems:"center", minWidth:"275px", fontSize:"18px",fontWeight:"999",
                      padding:"3px",backgroundColor:"#06988C",marginTop:"10px",
                      }}>
                        ONGOING RIDES
           </p>
         
         </div>
           <div className="card-body">
             <h5 className="card-title" style={{fontSize:"36px",fontWeight:"600"}}><CountUp duration={0.9} delay={0.2} end={15}/> </h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/><br/><br/>

      <div className="col-md ">
      <Card style={{maxWidth:"300px", maxHeight:"125px",backgroundColor:"#F1F1F1"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

          <p style={{color:"#FFFFFF",borderRadius:"10px", display:"flex",
                      flexDirection:"column",justifyContent:"center",
                      alignItems:"center", minWidth:"275px", fontSize:"18px",fontWeight:"999",
                      padding:"3px",backgroundColor:"#045C9F",marginTop:"10px",
                    }}>
                   RIDE REQUESTS
          </p>
          </div>
           <div className="card-body">
             <h5 className="card-title" style={{fontSize:"36px",fontWeight:"600"}} ><CountUp duration={0.9} delay={0.2} end={15}/></h5>
             {/* <p className="card-text">.</p> */}
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <div className="col-md ">
      <Card style={{maxWidth:"300px", maxHeight:"125px",backgroundColor:"#F1F1F1"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

          <p style={{color:"#FFFFFF",borderRadius:"10px", display:"flex",
                      flexDirection:"column",justifyContent:"center",
                      alignItems:"center", minWidth:"275px", fontSize:"18px",fontWeight:"999",
                      padding:"3px",backgroundColor:"#07AC2E",marginTop:"10px",
                      }}>
                      TOTAL NO.OF DRIVERS
          </p>
        </div>
           <div className="card-body">
             <h5 className="card-title" style={{fontSize:"36px",fontWeight:"600"}}><CountUp duration={0.9} delay={0.2} end={15}/></h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/>
      </div>
      </div>

      <div className='container mt-3'>
      <div className='row'>
      <div className="col-md ">
      <Card style={{maxWidth:"300px", maxHeight:"125px",backgroundColor:"#F1F1F1"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <p style={{color:"#FFFFFF",borderRadius:"10px", display:"flex",
                      flexDirection:"column",justifyContent:"center",
                      alignItems:"center", minWidth:"275px", fontSize:"18px",fontWeight:"999",
                      padding:"3px",backgroundColor:"#B7780A",marginTop:"10px",
                       }}>
                        DRIVERS ONLINE
            </p>
</div>
           <div className="card-body">
             <h5 className="card-title" style={{fontSize:"36px",fontWeight:"600"}}><CountUp duration={0.9} delay={0.2} end={15}/></h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/>
      <div className="col-md ">
      <Card style={{maxWidth:"300px", maxHeight:"125px",backgroundColor:"#F1F1F1"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>          
         
         <p style={{color:"#FFFFFF",borderRadius:"10px", display:"flex",
                      flexDirection:"column",justifyContent:"center",
                      alignItems:"center", minWidth:"275px", fontSize:"18px",fontWeight:"999",
                      padding:"3px",backgroundColor:"#A10C3E",marginTop:"10px",
                    }}>
                      TOTAL NO.OF RIDERS
          </p>
</div>
           <div className="card-body">
             <h5 className="card-title" style={{fontSize:"36px",fontWeight:"600"}}><CountUp duration={0.9} delay={0.2} end={15}/></h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/>
      <div className="col-md ">
      <Card style={{maxWidth:"300px", maxHeight:"125px",backgroundColor:"#F1F1F1"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>         
          <p style={{color:"#FFFFFF",borderRadius:"10px", display:"flex",
                      flexDirection:"column",justifyContent:"center",
                      alignItems:"center", minWidth:"275px", fontSize:"18px",fontWeight:"999",
                      padding:"3px",backgroundColor:"#5A0D9C",marginTop:"10px",
                    }}>
                      TOTAL NO.OF USERS
          </p>
</div>
           <div className="card-body">
             <h5 className="card-title" style={{fontSize:"36px",fontWeight:"600"}}><CountUp duration={0.9} delay={0.2} end={15}/></h5>
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