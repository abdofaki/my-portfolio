import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import Work from "../Components/Work"
import About from "../Components/AboutContent"
import WorkExperience from '../Components/WorkExperience'




const Home = () => {
    return (
        <div>
         <Navbar/>
         <HeroImg/>
         <WorkExperience/>
         <Work/>
         <About/>
         <Footer/>
        </div>
    )
}

export default Home
