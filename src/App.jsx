import './App.css'
// import { useState, useEffect } from 'react';
import {  Routes, Route } from 'react-router-dom'
import Signup from "./pages/sign-up/signUp"
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import Studentdashboard from './pages/Studentdashboard'
import Payment from './components/Payment/Payment'




function App() {
 
 

  return (
    <>
    <ToastContainer />
    <Routes>
      <Route index element={<Home/>}> 
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/log' element={<Login/>}/>
      <Route path='/dashboard' element={<Studentdashboard/>}/>
    <Route path='/payment' element={<Payment/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
