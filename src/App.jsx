import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import ages from "./pages/sign-up"
import Signup from "./pages/sign-up/signUp"
import Home from './pages/Home'


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}> 
      </Route>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
