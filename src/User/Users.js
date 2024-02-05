import React from 'react'
import SideBar from '../Components/SideBar';
import { Box } from '@mui/material';
import NavBar from '../Components/NavBar';
import Userlist from './UserList';


const Users = () => {
  return (
    <>
    <NavBar/>
    <div style={{marginTop:'60px'}}/>
    <div style={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{ flexGrow: 1, p:10  }}>

    <h1 style={{fontWeight:"900"}}>Users </h1>
          <Userlist/>
    </Box>
    </div>
    </>
  )
}

export default Users;