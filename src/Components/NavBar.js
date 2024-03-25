import * as React from 'react';
import './NavBar.css'
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import muiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useAppStore } from '../appStore';
import { createTheme,ThemeProvider} from '@mui/material/styles';
import logo from './fmhpheaderlogo-1.png'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';





const AppBar = styled(muiAppBar)
(({theme})=>({zIndex:theme.zIndex.drawer+1}))


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  '@media all': {
    minHeight: 100,
  },
}));

export default function NavBar() {

  const navigate = useNavigate();

  // const [isLoggedIn, setIsLoggedIn] = useState(true);
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
  const updateOpen = useAppStore((state) => state.updateOpen);
  const dopen = useAppStore((state) => state.dopen);


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
          <Badge badgeContent={0} color="error">
            <NotificationsIcon  />
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



  return (
  <>
    <Box >
      <ThemeProvider theme={head}>
      
      <AppBar position="fixed"  elevation={4} color="primary" >
      {/* <div className='navbar'> */}
        <StyledToolbar>
       
         <Typography sx={{marginTop:"20px"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=>updateOpen(!dopen)}
          >
            
            <MenuIcon sx={{fontSize:"40px"}}/>
          </IconButton>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { marginTop:"35px"} }}
          >
           <img src={logo} className='logo' style={{cursor:"pointer"}} alt='First Medical' onClick={()=>navigate("/Dashboard")}></img>
          </Typography>


          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <Typography sx={{marginTop:"20px"}}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon sx={{fontSize:"40px"}}/>
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
              <AccountCircle sx={{fontSize:"40px"}}/>
            </IconButton>
          </Typography>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Typography sx={{marginTop:"20px"}}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            </Typography>
          </Box>
        </StyledToolbar>
      </AppBar>
      {/* </div> */}
      </ThemeProvider>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    </>
  );
}
