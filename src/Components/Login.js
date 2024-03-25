import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { TextField } from '@mui/material';
import logo from './fmhpheaderlogo-1.png';
import { Box, Button, Grid,Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import bg from './Final login 2.png'




const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userId.length < 6) {
      setUserIdError('User ID must be at least 6 characters long');
      return;
    } else {
      setUserIdError('');
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    } else {
      setPasswordError('');
    }

    navigate('/Dashboard');
    localStorage.setItem('userId', userId);
    onLogin();
  };


  const handleUserIdChange = (event) => {
    const value = event.target.value;
    setUserId(value);
    if (value.length >= 6) {
      setUserIdError('');
    }
  };
  
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (value.length >= 6) {
      setPasswordError('');
    }
  };

  return (
    <>
      <div> 
          <div >
        <img src={bg} style={{height:"100vh",width:"100%"}} alt='Login BG'/>
          </div>
        
        <div className='login'>

          <Typography variant='h5' align='center'>
            <img src={logo} alt='logo' />
          </Typography>

          <Box height={30} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-required"
                required
                label="User Name"
                size='small'
                value={userId}
                // onChange={(e) => {
                //   setUserId(e.target.value);
                // }}

                onChange={handleUserIdChange}
                error={!!userIdError}
                helperText={userIdError}
                sx={{ minWidth: "100%" }}
              />
              </Grid>

              <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                required
                label="Password"
                size='small'
                value={password}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
                onChange={handlePasswordChange}
                error={!!passwordError}
                helperText={passwordError}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "100%" }}
              />
            </Grid>

            <Box height={70} />

            <Grid item xs={12}>
              <Typography variant='h5' align="center">
                <Button style={{ backgroundColor: "#0054A4" }} variant='contained' onClick={handleSubmit}>
                  Login
                </Button>
              </Typography>

              <Box height={20} />

              <Typography variant='h6' align='center' onClick sx={{ color: '#0054A4', cursor: "pointer", fontSize: "1rem", fontWeight: 'light' }}>
                Forgot password?
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ m: 4 }} />
        </div>
      </div>
    </>
  );
};

export default Login;

