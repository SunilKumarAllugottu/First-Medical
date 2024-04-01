import React,{useState,useEffect} from 'react';
import { styled, createTheme, ThemeProvider,useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ResponsiveDrawer from './ResponsiveDrawer';
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
import './NavBar.css'
import logo from './fmhpheaderlogo-1.png'
import Swal from 'sweetalert2';




const drawerWidth = 210;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  '@media all': {
    minHeight: 100,
  },
}));

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

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

export default function MiniDrawer() {
  const theme = useTheme();
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

  const head=createTheme({
    palette:{
      primary:{
        main:'#0054A4'
      },
    secondary:{
      main:'#138CFF'
    },
    }
  });

  const [open, setOpen] = useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  

  const handleLogout = () => {

    setAnchorEl(null);
    handleMobileMenuClose();
      // Display a confirmation dialog
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will be logged out.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout'
      }).then((result) => {
        if (result.isConfirmed) {
          // Clear the login data from local storage
          localStorage.removeItem('isLoggedIn');
          localStorage.removeItem('userId');
          // setIsLoggedIn(false);
          // Navigate to the login page
          window.location.href = '/';
        }
      });
    };


  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>LogOut</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );




  return (
    <>
    <Box sx={{position:"relative"}}>

      <CssBaseline />
      <ThemeProvider theme={head}>
      <AppBar position="fixed" color='primary'>

      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
        
            <Typography sx={{marginTop:"1.25rem"}}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={open ? handleDrawerClose : handleDrawerOpen}
                    sx={{ mr: 2, display: { xs: 'none',sm:"flex" } }}
                  >
                  <MenuIcon  sx={{fontSize:"2.5rem"}}/>
                </IconButton>
            </Typography>


                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' },marginTop:"2rem"}}
                >
                  <img src={logo} className='logo' style={{cursor:"pointer"}} alt='First Medical' onClick={()=>navigate("/Dashboard")}></img>
                </Typography>  

              <ResponsiveDrawer/>                


                <Typography
                    sx={{
                      mr: 2,
                      display: { xs: 'flex', sm: 'none' },
                      flexGrow: 1,
                      marginTop:"2rem"
                    }}
                  >
                    <img src={logo} className='logo' style={{cursor:"pointer"}} alt='First Medical' onClick={()=>navigate("/Dashboard")}></img>
                </Typography>           
                
                
                
              <Box sx={{ flexGrow: 1 }} />                
                
              <Box sx={{ display: { xs: 'none', md: 'flex' },marginTop:"1.25rem" }}>
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon sx={{fontSize:"2.5rem"}}/>
                    </Badge>
                  </IconButton>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle sx={{fontSize:"2.5rem"}}/>
                  </IconButton>
              </Box>

              <Box sx={{ display: { xs: 'flex', md: 'none' },marginTop:"1.25rem"}}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon sx={{fontSize:"2rem"}}/>
                  </IconButton>
              </Box>
        </StyledToolbar>
      </Container>
    </AppBar> 


    </ThemeProvider>

    <ThemeProvider theme={paint}>
      
      <Drawer variant="permanent" open={open}
         sx={{display:{xs:"none",sm:"flex"}}}
         PaperProps={{
              sx: {
                backgroundColor: "#0054A4",
                color: "white"
              }
            }}
      >
        
        <List>

<StyledToolbar/>

        <ListItem disablePadding sx={{ display: 'block', "&:hover":{backgroundColor:"#138CFF"},
             backgroundColor: window.location.pathname === '/'|| window.location.pathname.startsWith('/Dashboard') ? "#138CFF" : "transparent"}} 
             onClick={()=>navigate("/Dashboard")}
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
                onClick={() => {
                navigate("/ScheduleRide");
            }}
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
      </Drawer>
      </ThemeProvider>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      
      </Box>
      {renderMobileMenu}
      {renderMenu}
  </Box>
  </>
  );
}


