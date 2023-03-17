import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import Work from "../Components/Work"
import About from "../Components/AboutContent"




const Home = () => {
    return (
        <div>
         <Navbar/>
         <HeroImg/>
         <Work/>
         <About/>
         <Footer/>
        </div>
    )
}

export default Home
