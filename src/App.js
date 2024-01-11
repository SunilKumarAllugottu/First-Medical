import './App.css';
import Dashboard from './Dashboard';
import ScheduleRaide from './ScheduleRide'
import OngoingRaide from './OngoingRide'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './Settings';
import Reports from './Reports';
import Users from './Users';
import Vehicles from './Vehicles';
import Drivers from './Drivers';

function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route exact path='/'              element={<Dashboard/>}/>
      <Route exact path='/ScheduleRaide' element={<ScheduleRaide/>}/>
      <Route exact path='/OngoingRaide'  element={<OngoingRaide/>}/>
      <Route exact path='/Drivers'       element={<Drivers/>}/>
      <Route exact path='/Vehicles'      element={<Vehicles/>}/>
      <Route exact path='/Users'         element={<Users/>}/>
      <Route exact path='/Reports'       element={<Reports/>}/>
      <Route exact path='/Settings'      element={<Settings/>}/>
    </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
