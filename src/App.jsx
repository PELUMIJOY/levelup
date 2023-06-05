import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Join from './components/Join/Join'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/Slider/Categories'
import {slides} from "./components/Slider/Slider.js"
// import ages from "./pages/sign-up"
import Pages from "./pages/sign-up/signUp"


function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
    <Categories slides={slides}/>
    <Join/>
     <Contact/>
    <Footer/>
    <Pages/>


    </>
  )
}

export default App
