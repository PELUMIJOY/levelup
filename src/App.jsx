import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import ages from "./pages/sign-up"
import Signup from "./pages/sign-up/signUp"
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Navbar/>
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
