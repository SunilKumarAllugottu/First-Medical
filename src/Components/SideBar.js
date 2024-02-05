import * as React from 'react';
import { styled, createTheme, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../appStore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import { RiSteering2Fill } from "react-icons/ri";
import { TbCalendarUp } from "react-icons/tb";
// import { useState } from 'react';



const drawerWidth = 210;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar() {
  const theme = createTheme({
    palette:{
      primary:{
        main:'#FFFFFF'
      }
    },
    typography:{
      fontSize:15,
    }
  });

  // const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);



  
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Drawer  PaperProps={{
              sx: {
                backgroundColor: "#0054A4",
                color: "white"
              }
            }}
            variant="permanent" open={open} >
      <Box height={95}/>

        {/* <DrawerHeader>
          <IconButton >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider /> */}
        <List>

            <ListItem disablePadding sx={{ display: 'block', "&:hover":{backgroundColor:"#138CFF"},
             backgroundColor: window.location.pathname === '/' ? "#138CFF" : "transparent"}} 
             onClick={()=>navigate("/")}
             >

              <ListItemButton
              selected={window.location.pathname === '/'}
                sx={{
                   minHeight: 55,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <SpaceDashboardRoundedIcon color='primary'/>
                </ListItemIcon>
                <ListItemText  primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            
            
            <ListItem
               disablePadding sx={{
                 display: 'block',
                 "&:hover": {backgroundColor: "#138CFF",},
                 backgroundColor: window.location.pathname === '/ScheduleRide' || window.location.pathname.startsWith('/Newrequest') ? "#138CFF" : "transparent",
               }}
               onClick={() => navigate("/ScheduleRide")}
             >
                 <ListItemButton
                   selected={window.location.pathname === '/ScheduleRide' || window.location.pathname.startsWith('/Newrequest')}
                   sx={{
                     fontFamily: 'Montserrat',
                     minHeight: 55,
                     justifyContent: open ? 'initial' : 'center',
                     px: 2.5,
                     backgroundColor: window.location.pathname === '/ScheduleRide' || window.location.pathname.startsWith('/Newrequest') ? "#138CFF" : "transparent",
                   }}
                 >
                   <ListItemIcon
                     sx={{
                       minWidth: 0,
                       mr: open ? 3 : 'auto',
                       justifyContent: 'center',
                     }}
                   >
                     <AccessTimeIcon color='primary' />
                   </ListItemIcon>
                   <ListItemText primary="Schedule A Ride" sx={{ opacity: open ? 1 : 0 }} />
                 </ListItemButton>
             </ListItem>


            <ListItem disablePadding sx={{ display: 'block',"&:hover":{backgroundColor:"#138CFF"} , backgroundColor: window.location.pathname === '/OngoingRide' ? "#138CFF" : "transparent" }}
              onClick={()=>navigate("/OngoingRide")}
              >

              <ListItemButton
              selected={window.location.pathname === '/OngoingRide'}
                sx={{
                  minHeight: 55,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AirportShuttleIcon color='primary'/>
                </ListItemIcon>
                <ListItemText primary="Ongoing Rides" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>


             {/* <ListItem disablePadding sx={{ display: 'block',"&:hover":{backgroundColor:"#138CFF"} , backgroundColor: window.location.pathname === '/OngoingRide' ? "#138CFF" : "transparent" }}
              onClick={()=>navigate("/OngoingRide")}
              >

              <ListItemButton
              selected={window.location.pathname === '/OngoingRide'}
                sx={{
                  minHeight: 55,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AirportShuttleIcon color='primary'/>
                </ListItemIcon>
                <ListItemText primary="Completed Ride" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding sx={{ display: 'block',"&:hover":{backgroundColor:"#138CFF"} , backgroundColor: window.location.pathname === '/OngoingRide' ? "#138CFF" : "transparent" }}
              onClick={()=>navigate("/OngoingRide")}
              >

              <ListItemButton
              selected={window.location.pathname === '/OngoingRide'}
                sx={{
                  minHeight: 55,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AirportShuttleIcon color='primary'/>
                </ListItemIcon>
                <ListItemText primary="Cancled Rides" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem> */}


            <ListItem  disablePadding sx={{ display: 'block' , "&:hover":{backgroundColor:"#138CFF"}, backgroundColor: window.location.pathname === '/Upcoming' ? "#138CFF" : "transparent"}}
            onClick={()=>navigate("/Upcoming")}
            >

              <ListItemButton
              selected={window.location.pathname === '/Upcoming'}
                sx={{
                  minHeight: 55,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <TbCalendarUp fontSize={25} color='white' height={500}/>
                </ListItemIcon>
                <ListItemText primary="Upcoming Ride" sx={{ opacity: open ? 1 : 0, }} />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding sx={{ display: 'block',"&:hover":{backgroundColor:"#138CFF"},backgroundColor: window.location.pathname === '/Drivers' ? "#138CFF" : "transparent"}} 
            onClick={()=>navigate("/Drivers")}
            >

              <ListItemButton
              selected={window.location.pathname === '/Drivers'}
                sx={{
                  minHeight: 55,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <RiSteering2Fill fontSize={25} color='white' height={500}/>
                </ListItemIcon>
                <ListItemText primary="Drivers" sx={{ opacity: open ? 1 : 0, }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block', "&:hover":{backgroundColor:"#138CFF"} , backgroundColor: window.location.pathname === '/Vehicles' ? "#138CFF" : "transparent"}} 
             onClick={()=>navigate("/Vehicles")}
             >

              <ListItemButton
              selected={window.location.pathname === '/Vehicles'}
                sx={{
                  minHeight: 55,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <DriveEtaOutlinedIcon color='primary'/>
                </ListItemIcon>
                <ListItemText primary="Vehicles" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block',"&:hover":{backgroundColor:"#138CFF"} , backgroundColor: window.location.pathname === '/Users' ? "#138CFF" : "transparent"}}  
            onClick={()=>navigate("/Users")}
            >

              <ListItemButton
              selected={window.location.pathname === '/Users'}
                sx={{
                  minHeight: 55,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <GroupIcon  color='primary'/>
                </ListItemIcon>
                <ListItemText primary="Users" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block', "&:hover":{backgroundColor:"#138CFF"} , backgroundColor: window.location.pathname === '/Reports' ? "#138CFF" : "transparent"}} 
            onClick={()=>navigate("/Reports")}
            >

              <ListItemButton
              selected={window.location.pathname === '/Reports'}
                sx={{
                  minHeight: 55,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <ReceiptLongIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary="Reports" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block', "&:hover":{backgroundColor:"#138CFF"} , backgroundColor: window.location.pathname === '/Settings' ? "#138CFF" : "transparent"}} 
            onClick={()=>navigate("/Settings")}
            >

              <ListItemButton
              selected={window.location.pathname === '/Settings'}
                sx={{
                  minHeight: 55,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <SettingsIcon color='primary'/>
                </ListItemIcon>
                <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />  
      </Drawer>
      </ThemeProvider>
    </Box>
  );
}
