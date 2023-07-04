import './App.css'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./pages/sign-up/signUp"
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import firebase from './service/firebase'


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);
 

  return (
    <>
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route index element={<Home/>}> 
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/log' element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
