import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {ThemeProvider,createTheme} from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import { RiSteering2Fill } from "react-icons/ri";
import { TbCalendarUp } from "react-icons/tb";
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';
import logo from './fmhpheaderlogo-1.png'




const drawerWidth = 210;
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  '@media all': {
    minHeight: 100,
  },
}));


function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

const navigate = useNavigate();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
 
  const paint = createTheme({
    palette:{
      primary:{
        main:'#FFFFFF'
      }
    },
    typography:{
      fontSize:15,
    }
  });


  
  return (
    <Box>
      
      <Typography sx={{marginTop:"1.25rem"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon  sx={{fontSize:"2.5rem"}}/>
          </IconButton>
          </Typography>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <ThemeProvider theme={paint}>
        
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          PaperProps={{
            sx: {
              backgroundColor: "#0054A4",
              color: "white"
            }
          }}
        > 
         <StyledToolbar />
         {/* <Toolbar /> */}


      <List>
      <ListItem disablePadding sx={{ display: 'block', "&:hover":{backgroundColor:"#138CFF"},
              backgroundColor: window.location.pathname === '/'|| window.location.pathname.startsWith('/Dashboard') ? "#138CFF" : "transparent"}} 
              onClick={()=>navigate("/Dashboard")}
              >

              <ListItemButton
              selected={window.location.pathname === '/'}
                sx={{
                   minHeight: 55,
                  px: .5,
                }}
              >
                <ListItemIcon
                  sx={{
                   
                  }}
                >
                  <SpaceDashboardRoundedIcon color='primary'/>
                </ListItemIcon>
  
                <ListItemText  primary="Dashboard"/>
              </ListItemButton>
            </ListItem>


            <ListItem
                disablePadding sx={{
                  display: 'block',
                  "&:hover": {backgroundColor: "#138CFF",},
                  backgroundColor: window.location.pathname === '/ScheduleRide' || window.location.pathname.startsWith('/Newrequest') ? "#138CFF" : "transparent",
                }}
                onClick={() => {
                navigate("/ScheduleRide");
            }}
              >
                  <ListItemButton
                    selected={window.location.pathname === '/ScheduleRide' || window.location.pathname.startsWith('/Newrequest')}
                    sx={{
                      fontFamily: 'Montserrat',
                      minHeight: 55,
                      px: .5,
                      backgroundColor: window.location.pathname === '/ScheduleRide' || window.location.pathname.startsWith('/Newrequest') ? "#138CFF" : "transparent",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                      
                        
                      }}
                    >
                      <AccessTimeIcon color='primary' />
                    </ListItemIcon>
                    <ListItemText primary="Schedule A Ride"  />
                  </ListItemButton>
              </ListItem>


              <ListItem disablePadding sx={{ display: 'block',"&:hover":{backgroundColor:"#138CFF"} , backgroundColor: window.location.pathname === '/OngoingRide' ? "#138CFF" : "transparent" }}
              onClick={()=>navigate("/OngoingRide")}
              >

              <ListItemButton
              selected={window.location.pathname === '/OngoingRide'}
                sx={{
                  minHeight: 55,
                  px: .5,
                }}
              >
                <ListItemIcon
                  sx={{
                   
                    
                  }}
                >
                  <AirportShuttleIcon color='primary'/>
                </ListItemIcon>
                <ListItemText primary="Ongoing Rides" />
              </ListItemButton>
            </ListItem>


            <ListItem  disablePadding sx={{ display: 'block' , "&:hover":{backgroundColor:"#138CFF"}, backgroundColor: window.location.pathname === '/Upcoming' ? "#138CFF" : "transparent"}}
            onClick={()=>navigate("/Upcoming")}
            >

              <ListItemButton
              selected={window.location.pathname === '/Upcoming'}
                sx={{
                  minHeight: 55,
                  px: .5,
                }}
              >
                <ListItemIcon
                  sx={{
                   
                    
                  }}
                >
                  <TbCalendarUp fontSize={25} color='white' height={500}/>
                </ListItemIcon>
                <ListItemText primary="Upcoming Ride" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding sx={{ display: 'block',"&:hover":{backgroundColor:"#138CFF"},backgroundColor: window.location.pathname === '/Drivers' ? "#138CFF" : "transparent"}} 
            onClick={()=>navigate("/Drivers")}
            >

              <ListItemButton
              selected={window.location.pathname === '/Drivers'}
                sx={{
                  minHeight: 55,
                  px: .5,
                }}
              >
                <ListItemIcon
                  sx={{
                   
                    
                  }}
                >
                  <RiSteering2Fill fontSize={25} color='white' height={500}/>
                </ListItemIcon>
                <ListItemText primary="Drivers"  />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block', "&:hover":{backgroundColor:"#138CFF"} , backgroundColor: window.location.pathname === '/Vehicles' ? "#138CFF" : "transparent"}} 
             onClick={()=>navigate("/Vehicles")}
             >

              <ListItemButton
              selected={window.location.pathname === '/Vehicles'}
                sx={{
                  minHeight: 55,
                  px: .5,
                }}
              >
                <ListItemIcon
                  sx={{
                   
                    
                  }}
                >
                  <DriveEtaOutlinedIcon color='primary'/>
                </ListItemIcon>
                <ListItemText primary="Vehicles" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block',"&:hover":{backgroundColor:"#138CFF"} , backgroundColor: window.location.pathname === '/Users' ? "#138CFF" : "transparent"}}  
            onClick={()=>navigate("/Users")}
            >

              <ListItemButton
              selected={window.location.pathname === '/Users'}
                sx={{
                  minHeight: 55,
                  px: .5,
                }}
              >
                <ListItemIcon
                  sx={{
                   
                    
                  }}
                >
                  <GroupIcon  color='primary'/>
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block', "&:hover":{backgroundColor:"#138CFF"} , backgroundColor: window.location.pathname === '/Reports' ? "#138CFF" : "transparent"}} 
            onClick={()=>navigate("/Reports")}
            >

              <ListItemButton
              selected={window.location.pathname === '/Reports'}
                sx={{
                  minHeight: 55,
                  px: .5,
                }}
              >
                <ListItemIcon
                  sx={{
                   
                    
                  }}
                >
                  <ReceiptLongIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block', "&:hover":{backgroundColor:"#138CFF"} , backgroundColor: window.location.pathname === '/Settings' ? "#138CFF" : "transparent"}} 
            onClick={()=>navigate("/Settings")}
            >

              <ListItemButton
              selected={window.location.pathname === '/Settings'}
                sx={{
                  minHeight: 55,
                  px: .5,
                }}
              >
                <ListItemIcon
                  sx={{
                    
                    
                  }}
                >
                  <SettingsIcon color='primary'/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
      </List>
        </Drawer>
        </ThemeProvider>
      </Box>
      
    </Box>
  );
}


export default ResponsiveDrawer;
