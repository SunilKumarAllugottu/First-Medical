import React from 'react'
import { Box, TextField, Grid } from '@mui/material'
import Paper from '@mui/material/Paper';
import MiniDrawer from '../Components/MiniDrawer';

const Newrequest = () => {
  return (
  <>
      <MiniDrawer/>
      <div>  
      <div className='container mt-3'>
      <div className='row'>
        <div className='col-md'>
            <h1 style={{ fontWeight: "900" }}>New Request </h1>
        </div>
      

        <Grid item xs={12} md={9}>
          <Box component="main" >
            <div style={{display:'flex',justifyContent:"center", alignItems:'center'}}>
            <Paper elevation={3} sx={{ width:"80%", backgroundColor: "#F5F5F5", border: "2px solid #bebebe", padding: "20px 30px 0px 30px ", borderRadius: "20px"}}>
              <Box height={20}/>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-required"
                    required
                    label="First Name"
                    size='medium'
                    sx={{ minWidth: "100%" }}
                  />
                </Grid>
                

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-required"
                    required
                    label="Last Name"
                    size='medium'
                    sx={{ minWidth: "100%" }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-required"
                    required
                    label="Email"
                    size='medium'
                    sx={{ minWidth: "100%" }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-required"
                    required
                    label="Choose Ride type"
                    size='medium'
                    sx={{ minWidth: "100%" }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-required"
                    required
                    label="Pickup Location"
                    size='medium'
                    sx={{ minWidth: "100%" }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-required"
                    required
                    label="Drop Location"
                    size='medium'
                    sx={{ minWidth: "100%" }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-required"
                    required
                    label="Date"
                    size='medium'
                    sx={{ minWidth: "100%" }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-required"
                    required
                    label="Time"
                    size='medium'
                    sx={{ minWidth: "100%" }}
                  />
                </Grid>
                </Grid>
                
               <div style={{display:'flex',justifyContent:"center", alignItems:'center',padding:"5% 0px 5% 0px"}}>
                <button className='btn btn' 
                        style={{backgroundColor:"#0054A4", color:"#FFFFFF",padding:"10px"}}
                >
                  Schedule Ride
                </button>
              </div> 
            </Paper>
            </div>
          </Box>
        </Grid>
      </div>
      </div>
      </div>
  </>
  )
}

export default Newrequest
