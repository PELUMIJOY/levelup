import Navbar from "../components/Navbar/Navbar"

import Contact from "../components/Contact/Contact"
// import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Join from '../components/Join/Join'

import Categories from '../components/Slider/Categories'
import {slides, slides1} from "../components/Slider/Slider.js"
import Testi from "../components/Testismony/Testi"




const Home = () => {
  return (
    <div id="home">
    <Navbar/>
     <Hero/>
    <Categories slides={slides} slides1={slides1}/>
    <Testi/>
    <Join/>
     <Contact/>
    {/* <Footer/>  */}
    </div>
  )
}

export default Home