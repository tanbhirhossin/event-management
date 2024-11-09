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

import Event from './pages/Event';
import Eventadd from './pages/Event/Eventadd';

import Employee from './pages/Employee';
import Employeeadd from './pages/Employee/Employeeadd';

import EventTask from './pages/EventTask';
import EventTaskadd from './pages/EventTask/EventTaskadd';

import EventExpense from './pages/EventExpense';
import Expenseadd from './pages/EventExpense/Expenseadd';

import payment from './pages/payment';
import Paymentcal from './pages/payment/Paymentcal';





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

          <Route path= {"/EventTask"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <EventTask /> 
           </Protected>
           } />
           <Route path= {"/EventTaskadd"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <EventTaskadd /> 
           </Protected>
           } />
           <Route path= {"/eventtaskedit/:id"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Taskadd /> 
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
          <Route path= {"/timelineedit/:id"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Timelineadd /> 
           </Protected>
           } />


          <Route path= {"/Event"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Event /> 
           </Protected>
           } />
          <Route path= {"/Eventadd"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Eventadd /> 
           </Protected>
           } />
          <Route path= {"/eventedit/:id"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Event /> 
           </Protected>
           } />


          <Route path= {"/Employee"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Employee /> 
           </Protected>
           } />
          <Route path= {"/Employeeadd"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Employeeadd /> 
           </Protected>
           } />
          <Route path= {"/employeeedit/:id"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Employee /> 
           </Protected>
           } />


          <Route path= {"/EventExpense"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <EventExpense /> 
           </Protected>
           } />
          <Route path= {"/Expenseadd"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Expenseadd /> 
           </Protected>
           } />
          <Route path= {"/expenseedit/:id"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Expenseadd /> 
           </Protected>
           } />


          <Route path= {"/payment"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <payment /> 
           </Protected>
           } />
          <Route path= {"/Paymentcal"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Paymentcal /> 
           </Protected>
           } />
          <Route path= {"/paymentedit/:id"} element={
            <Protected  isSignedIn= {isSignedIn} >
              < Protected/> 
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
          <Route path= {"/vendoredit/:id"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Vendoreadd /> 
           </Protected>
           } />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
