import React from 'react'
import Dashboard from './Dashboard';
import ScheduleRide from './Schedule/ScheduleRide'
import OngoingRide from './Ongoing/OngoingRide'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './Settings';
import Reports from './Reports';
import Users from './User/Users';
import Vehicles from './Vehicles/Vehicles';
import Drivers from '../src/Driver/Drivers';
import Upcoming  from './Upcoming/Upcoming';
import Newrequest from './Schedule/Newrequest';


const Main = () => {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route exact path='/'              element={<Dashboard/>}/>
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