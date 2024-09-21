import React, { useState,useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './components/protected';
import Home from './pages/Home';
import TaskManagment from './pages/TaskManagment';

function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path= {"/"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Dashboard /> 
           </Protected>
           } />

          <Route path= {"/task_management"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <TaskManagment /> 
           </Protected>
           } />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
