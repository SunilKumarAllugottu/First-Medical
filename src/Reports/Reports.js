import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import { Box, TextField, Grid, Button, Divider, CardHeader } from '@mui/material'
import Paper from '@mui/material/Paper';
import MiniDrawer from '../Components/MiniDrawer';

const Reports = () => {
  return (
    <>
      <MiniDrawer/>
      <div className="main" >
      <div className='container mt-3'>
      <div className='row'>
        <div className='col-md'>
        <h1 style={{fontWeight:"900"}}>Reports </h1>
        </div>

        <Toolbar/>

        <Box component="main" >

          <Paper elevation={3} sx={{ padding: "50px" }}>
            <Grid container spacing={2}>


              <Grid item >
                <TextField
                  id="outlined-required"
                  label="Start Date"
                  size='small'
                  sx={{ minWidth: "100%" }}
                />
              </Grid>

              <Grid item>
                <TextField
                  id="outlined-required"
                  label="End Date"
                  size='small'
                  sx={{ minWidth: "10%" }}
                />
              </Grid>

              <Grid  item xs={12} sm={12} md={6} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" style={{ backgroundColor: "#0054A4", color: "#fff", marginRight: '10px', minWidth:"100px" }}>Weeks</Button>
                <Button variant="contained" style={{ backgroundColor: "#0054A4", color: "#fff", marginRight: '10px', minWidth:"100px" }}>Months</Button>
                <Button variant="contained" style={{ backgroundColor: "#0054A4", color: "#fff", marginRight: '10px', minWidth:"100px" }}>Years</Button>
              </Grid>
            </Grid>
          </Paper>

            <Box height={50}/>
          <Paper elevation={3}  sx={{padding:"20px"}}>
          <h4 style={{ padding:"10px", border:"1px solid #BEBEBE", borderRadius:"10px" , backgroundColor:"#F1F1F1"}}>
  Driver Reports
</h4>
            <Divider/>

            <Grid  item xs={12} sm={12} md={6} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'flex-end', paddingTop:"20px"}}>
                <Button variant="contained" style={{ backgroundColor: "#0054A4", color: "#fff", marginRight: '10px', minWidth:"100px" }}>View</Button>
            </Grid>
          </Paper>
        </Box>
      </div>
      </div>
      </div>
      {/* <Toolbar/> */}
  </>
  )
}

export default Reports;
