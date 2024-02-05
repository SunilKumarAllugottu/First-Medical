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
      <Card style={{maxWidth:"300px", maxHeight:"125px",backgroundColor:"#00CCBB"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>  

           <p style={{color:"black",borderRadius:"10px", display:"flex",
                      flexDirection:"column",justifyContent:"center",
                      alignItems:"center", minWidth:"225px", fontSize:"14px",fontWeight:"999",
                      padding:"3px",backgroundColor:"#ffffff",marginTop:"10px",
                      }}>
                        ONGOING RIDES
           </p>
         
         </div>
           <div className="card-body">
             <h5 className="card-title" 
                 style={{fontSize:"36px",fontWeight:"600",color:"white",
                 display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
                 }}
                 >
                 <CountUp duration={0.9} delay={0.2} end={15}/> </h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/><br/><br/>
        

      <div className="col-md ">
      <Card style={{maxWidth:"300px", maxHeight:"125px",backgroundColor:"#0054A4"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

          <p style={{color:"BLACK",borderRadius:"10px", display:"flex",
                      flexDirection:"column",justifyContent:"center",
                      alignItems:"center", minWidth:"225px", fontSize:"14px",fontWeight:"999",
                      padding:"3px",backgroundColor:"#FFFFFF",marginTop:"10px",
                    }}>
                   RIDE REQUESTS
          </p>
          </div>
           <div className="card-body">
             <h5 className="card-title" 
             style={{fontSize:"36px",fontWeight:"600",color:"white",
             display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
             }}
              >
              <CountUp duration={0.9} delay={0.2} end={15}/></h5>
             {/* <p className="card-text">.</p> */}
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/><br/>


      <div className="col-md ">
      <Card style={{maxWidth:"300px", maxHeight:"125px",backgroundColor:"#07AC2E"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

          <p style={{color:"BLACK",borderRadius:"10px", display:"flex",
                      flexDirection:"column",justifyContent:"center",
                      alignItems:"center", minWidth:"225px", fontSize:"14px",fontWeight:"999",
                      padding:"3px",backgroundColor:"#FFFFFF",marginTop:"10px",
                      }}>
                       NO.OF DRIVERS
          </p>
        </div>
           <div className="card-body">
             <h5 className="card-title" 
                 style={{fontSize:"36px",fontWeight:"600",color:"white",
                 display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
                 }}
                 >
                 <CountUp duration={0.9} delay={0.2} end={15}/></h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/>
      <div className="col-md ">
      <Card style={{maxWidth:"300px", maxHeight:"125px",backgroundColor:"#B7780A"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <p style={{color:"BLACK",borderRadius:"10px", display:"flex",
                      flexDirection:"column",justifyContent:"center",
                      alignItems:"center", minWidth:"200px", fontSize:"14px",fontWeight:"999",
                      padding:"3px",backgroundColor:"#FFFFFF",marginTop:"10px",
                       }}>
                        DRIVERS ONLINE
            </p>
         </div>
           <div className="card-body">
             <h5 className="card-title" 
                 style={{fontSize:"36px",fontWeight:"600",color:"white",
                         display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
                        }}
                        >
                        <CountUp duration={0.9} delay={0.2} end={15}/></h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/>
      </div>
      </div>

      <div className='container mt-3'>
      <div className='row'>
      

      
      <div className="col-sm-3 ">
      <Card style={{maxWidth:"300px", maxHeight:"125px",backgroundColor:"#A10C3E"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>          
         
         <p style={{color:"BLACK",borderRadius:"10px", display:"flex",
                      flexDirection:"column",justifyContent:"center",
                      alignItems:"center", minWidth:"200px", fontSize:"14px",fontWeight:"999",
                      padding:"3px",backgroundColor:"#FFFFFF",marginTop:"10px",
                    }}>
                       NO.OF RIDERS
          </p>
</div>
           <div className="card-body">
             <h5 className="card-title" 
                 style={{fontSize:"36px",fontWeight:"600",color:"white",
                 display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
            }}
            >
              <CountUp duration={0.9} delay={0.2} end={15}/></h5>
           </div>
      </div>
      </Card>
      </div>
      <br/><br/><br/><br/>


      <div className="col-sm-3 ">
      <Card style={{maxWidth:"300px", maxHeight:"125px",backgroundColor:"#5A0D9C"}}>
      <div classNameName="card text-white bg-primary mb-3" style={{ minWidth:"10px"}}>  
         <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>         
          <p style={{color:"BLACK",borderRadius:"10px", display:"flex",
                      flexDirection:"column",justifyContent:"center",
                      alignItems:"center", minWidth:"200px", fontSize:"14px",fontWeight:"999",
                      padding:"3px",backgroundColor:"#FFFFFF",marginTop:"10px",
                    }}>
                       NO.OF USERS
          </p>
</div>
           <div className="card-body">
             <h5 className="card-title" 
                 style={{fontSize:"36px",fontWeight:"600",color:"white",
                         display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
                        }}
            >
            <CountUp duration={0.9} delay={0.2} end={15}/></h5>
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