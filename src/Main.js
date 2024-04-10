import React from 'react'
import Dashboard from './Dashboard';
import ScheduleRide from './Schedule/ScheduleRide'
import OngoingRide from './Ongoing/OngoingRide'
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Settings from './Reports/Settings';
import Reports from './Reports/Reports';
import Users from './User/Users';
import Vehicles from './Vehicles/Vehicles';
import Drivers from '../src/Driver/Drivers';
import Upcoming  from './Upcoming/Upcoming';
import Newrequest from './Schedule/Newrequest';
import Login from './Components/Login';
import { useState, useEffect } from 'react';


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
    setIsLoggedIn(true);
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