import Navbar from "../components/Navbar/Navbar"

import Contact from "../components/Contact/Contact"
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Join from '../components/Join/Join'

import Categories from '../components/Slider/Categories'
import {slides} from "../components/Slider/Slider.js"

const Home = () => {
  return (
    <div>
    <Navbar/>
     <Hero/>
    <Categories slides={slides}/>
    <Join/>
     <Contact/>
    <Footer/> 
    </div>
  )
}

export default Home