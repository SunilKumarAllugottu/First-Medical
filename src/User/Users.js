import React from 'react'
import { Box } from '@mui/material';
import Userlist from './UserList';
import MiniDrawer from '../Components/MiniDrawer';


const Users = () => {
  return (
  <>
    <MiniDrawer/>
      <div className="main" >
      <div className='container mt-3'>
      <div className='row'>
        <div className='col-md'>
        <h1 style={{fontWeight:"900"}}>Users </h1>
        </div>
            <Box height={50}/>
            <div><Userlist/></div>
      </div>
      </div>
      </div>
  </>
  )
}

export default Users;