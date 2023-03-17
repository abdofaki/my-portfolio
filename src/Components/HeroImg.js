import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro-pg.jpg"
import IntroImg2 from "../assets/intro-bg2.jpg"
import mypic from "../assets/mypic.png"
import {Link} from "react-router-dom"

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" 
                src={IntroImg2}/>
            </div>
            <div className="content">
                <p>HI, I AM ABDO ALRAHMAN</p>
                <p>RECENT BOOTCAMP GRADUATE</p>
                <h1>Full Stack Developer</h1>
   
                <div>
                    <Link to="/Projects" className="btn">
                        Projects
                    </Link>

                    <Link to="/Contact" className="btn btn-light">
                        Contact
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default HeroImg
