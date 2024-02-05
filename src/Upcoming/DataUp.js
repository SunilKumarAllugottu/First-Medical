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
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
import { db } from "../Driver/Firebase-config";
import {
  collection,
  getDocs,
  // addDoc,
  // updateDoc,
  // deleteDoc,
  // doc,
} from "firebase/firestore";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Swal from "sweetalert2";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import { CgFileDocument } from "react-icons/cg";
import { Divider } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import AddUser from '../User/AddUser';
import { useAppStore } from '../appStore';



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
  


export default function DataUp() {
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
    <Paper sx={{ width: '100%', overflow: 'hidden' }}> 
          <Divider />
          <Box height={10} />
          
          <Box height={10} />


      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>


              <TableCell
                  align="center"
                  style={{ minWidth: "100px" ,fontWeight:"900"}}
                >
                  Name
                </TableCell>


                <TableCell
                  align="center"
                  style={{ minWidth: "100px",fontWeight:"900" }}
                >
                  Source Name
                </TableCell>


                <TableCell
                  align="center"
                  style={{ minWidth: "100px",fontWeight:"900" }}
                >
                  Destination Name
                </TableCell>


                <TableCell
                  align="center"
                  style={{ minWidth: "100px",fontWeight:"900" }}
                >
                  Date
                </TableCell>


                <TableCell
                  align="center"
                  style={{ minWidth: "100px",fontWeight:"900" }}
                >
                  Time
                </TableCell>


                <TableCell
                  align="center"
                  style={{ minWidth: "100px",fontWeight:"900" }}
                >
                  vehicle
                </TableCell>


                <TableCell
                  align="center"
                  style={{ minWidth: "100px",fontWeight:"900" }}
                >
                 Tracking
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
                          {row.source}
                        </TableCell>


                        <TableCell  align="center">
                          {row.destination}
                        </TableCell>


                        <TableCell  align="center">
                          {row.date}
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
    </Paper>
    </>
  );
}