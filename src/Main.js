import React from 'react'
import Dashboard from './Dashboard';
import ScheduleRide from './Schedule/ScheduleRide'
import OngoingRide from './Ongoing/OngoingRide'
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Settings from './Settings';
import Reports from './Reports';
import Users from './User/Users';
import Vehicles from './Vehicles/Vehicles';
import Drivers from '../src/Driver/Drivers';
import Upcoming  from './Upcoming/Upcoming';
import Newrequest from './Schedule/Newrequest';
import Login from './Components/Login';
import { useState, useEffect } from 'react';
import Logout from './Components/LogOut';


const Main = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in (e.g., by checking local storage)
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // Perform authentication (e.g., send login request to server)
    // Upon successful authentication, set isLoggedIn to true
    setIsLoggedIn(true);
    // Store login status in local storage
    localStorage.setItem('isLoggedIn', 'true');
  };


  return (
    <>
     <BrowserRouter>
    <Routes>
           
    <Route
          exact
          path="/"
          element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
        />
      <Route  exact path="/Dashboard"
        element={isLoggedIn ? <Dashboard/> : <Navigate to="/" />}/>




      {/* <Route exact path='/'              element={<Login/>}/> */}
      {/* // <Route exact path='/Dashboard'              element={<Dashboard/>}/> */}
      <Route exact path='/LogOut' element={<Logout/>}/>
      <Route exact path='/ScheduleRide' element={<ScheduleRide/>}/>
      <Route exact path='/Newrequest' element={<Newrequest/>}/>
      <Route exact path='/OngoingRide'  element={<OngoingRide/>}/>
      <Route exact path='/Upcoming'       element={<Upcoming/>}/>
      <Route exact path='/Drivers'       element={<Drivers/>}/>
      <Route exact path='/Vehicles'      element={<Vehicles/>}/>
      <Route exact path='/Users'         element={<Users/>}/>
      <Route exact path='/Reports'       element={<Reports/>}/>
      <Route exact path='/Settings'      element={<Settings/>}/>
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default Main