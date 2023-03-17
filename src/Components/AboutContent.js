import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.jpg"
import mypic from "../assets/mypic.png"
import seo from "../assets/seo.png"
import increase from "../assets/increase.png"


const AboutContent = () => {
    return (
        <>

<div className="about">
                <div className="left">
                    <h1>who Am I?</h1>
                    <img className="mypic" src={mypic} />
                    <p className="aboutMe">Full-stack Java developer proficient in utilizing 
                        a wide variety of programs and tools to create
                         high-quality applications and systems
                          to boost organizational efficiency and productivity</p>
                    {/* <Link to="/Contact">
                        <button className="btn">
                            CONTACT
                </button>
                
                    </Link> */}
                    <a href="resume.pdf" download="resume.pdf">
                <button className="btn">
                           downlaod resume
                </button>
                </a>
                </div>

                <div className="right">
                    <div className="img-container">
                        <div className="img-stack top">
                            <img src={react1} className="img"
                                alt="true" />
                        </div>

                        <div className="img-stack bottom">
                            <img src={react2} className="img"
                                alt="true" />
                        </div>
                    </div>
                </div>

            </div>

            
            {/* <div className="aboutMe">
                <div className="section">
                    <div className="left-section">
                        <img src={mypic} />
                    </div>
                    <div className="right-section">

                        <h1 className="headerr">About me</h1>
                        <p className="right-section-p">Full-stack Java developer proficient in utilizing a wide variety of
                        programs and tools to create high-quality applications and systems to boost organizational efficiency and productivity.I am a quick learner,
                         Team-Oriented, and the ability to thrive under pressure</p>


                    </div>
                </div>

            </div> */}


            <h2 className="mySkills">My Skills</h2>
            <div class="skill-row">

                <img className="img-com" src={seo} />
                <div className="skill-row-right">
                    <h3 className="frontEnd">Front End</h3>
                    <ul className="skillList">
                        <li>React</li>
                        <li>Redux</li>
                        <li>Bootstrap</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Jest</li>
                        <li>Node.js</li>
                        <li>TypeScript.js</li>

                    </ul>
                </div>

            </div>

            <div class="skill-row">

               
                <div className="skill-row-right2">
                    <h3 className="backEnd">Back End</h3>
                    <ul className="skillList2">
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>Spring Boot</li>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>JUnit</li>
                       

                    </ul>
                </div>
                <img className="img-com2" src={increase} />



            </div>


           
        </>
    )
}

export default AboutContent
