import React, { useState,useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './components/protected';
import Home from './pages/Home';

import Timeline from './pages/Timeline';
import Timelineadd from './pages/Timeline/Timelineadd';

import Form from './pages/Form';
import EventList from './pages/Form/EventList';

import TaskManagement from './pages/TaskManagement';
import Taskadd from './pages/TaskManagement/Taskadd';

import Budget from './pages/Budget';
import AddBudget from './pages/Budget/Budgetadd';

import EventRequest from './pages/EventRequest';

import Vendor from './pages/Vendor';
import Vendoreadd from './pages/Vendor/Vendoreadd';





function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />
        } />
         

          <Route path= {"/"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Dashboard /> 
           </Protected>
           } />



         
          <Route path= {"/Budget"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Budget /> 
           </Protected>
           } />
           <Route path= {"/Budgetadd"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <AddBudget /> 
           </Protected>
           } />
           <Route path= {"/budgetedit/:id"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <AddBudget /> 
           </Protected>
           } />

           


          <Route path= {"/Timeline"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Timeline /> 
           </Protected>
           } />
          <Route path= {"/Timelineadd"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Timelineadd /> 
           </Protected>
           } />
          







          <Route path= {"/Form"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Form /> 
           </Protected>
           } />
          <Route path= {"/formedit/:id"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Form /> 
           </Protected>
           } />
         <Route path= {"/EventList"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <EventList /> 
           </Protected>
           } />



          <Route path= {"/TaskManagement"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <TaskManagement /> 
           </Protected>
           } />
          <Route path= {"/Taskadd"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Taskadd /> 
           </Protected>
           } />
          <Route path= {"/taskedit/:id"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Taskadd /> 
           </Protected>
           } />
          


          <Route path= {"/EventRequest"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <EventRequest /> 
           </Protected>
           } />



          <Route path= {"/Vendor"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Vendor /> 
           </Protected>
           } />
          <Route path= {"/Vendoreadd"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Vendoreadd /> 
           </Protected>
           } />
          
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
