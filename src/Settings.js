import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import { db } from './Driver/Firebase-config';
import Stack from '@mui/material/Stack';

import {
  collection,
  getDocs,
  // addDoc,
  // updateDoc,
  // deleteDoc,
  // doc,
} from "firebase/firestore";
import { Divider } from '@mui/material';
import { useAppStore } from './appStore';
import MiniDrawer from './Components/MiniDrawer';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Settings = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [rows, setRows] = useState([]);
  const setRows=useAppStore((state)=>state.setRows)
  const rows=useAppStore((state)=>state.rows)
  const empCollectionRef = collection(db, "Upcomming");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  
useEffect(() => {
    getUsers();
  }, []);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    <>
    <MiniDrawer/>
    
    <Stack>
    
    <div component="main" >
      <div className='container mt-3'>
      <div className='row'>
        <div className='col-md'>
        <h1 style={{fontWeight:"900"}}>Settings</h1>
        </div>

          <Box height={50} />

    <Paper sx={{width: '100%', overflow: 'hidden' }}> 
    <Divider />
          <Box height={10} />

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>


                <TableCell
                  align="center"
                  style={{ minWidth: "100px",fontWeight:"900" }}
                >
                  Default Time
                </TableCell>


                <TableCell
                  align="center"
                  style={{ minWidth: "100px",fontWeight:"900" }}
                >
                  Auto Email Notification
                </TableCell>


                <TableCell
                  align="center"
                  style={{ minWidth: "100px",fontWeight:"900" }}
                >
                  Radius For Driver
                </TableCell>


                <TableCell
                  align="center"
                  style={{ minWidth: "100px",fontWeight:"900" }}
                >
                  Actions
                </TableCell>


                
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.id} hover role="checkbox" tabIndex={-1} >
                    
                        <TableCell  align="center">
                          {row.name}
                        </TableCell>


                        <TableCell  align="center">
                          {row.time}
                        </TableCell>


                        <TableCell  align="center">
                          {row.vehicle}
                        </TableCell>

                        <TableCell align="center">
                          
                            <button className='btn btn' 
                            style={{backgroundColor:"#0054A4",color:"white"}}
                            >
                            View
                            </button>
                        </TableCell>



                        <TableCell  align="center">
                          {row.status}
                        </TableCell>

                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25,50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper></div>
    </div>
    </div>
    </Stack>
  </>
  )
}

export default Settings;