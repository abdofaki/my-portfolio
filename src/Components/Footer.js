import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    {/* <div className="location">
                        <FaHome size={20} style={{
                            color: "white"
                            , marginRight: "2rem"
                        }} />
                        <div>
                            <p>9322 fox creek</p>
                            <p>Lathrop</p>
                        </div>

                    </div> */}
                    {/* <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{
                                color: "white"
                                , marginRight: "2rem"
                            }} />
                         209-283-8701
                        </h4>

                    </div> */}

                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{
                                color: "white"
                                , marginRight: "2rem"
                            }} />
                        mohamabdo@yahoo.com
                        </h4>

                    </div>

                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>you can call me Abdo.I enjoy discussing new projects and design challenges.</p>
                    <div className="social">
                        {/* <FaFacebook size={30} style={{
                            color: "white"
                            , marginRight: "1rem"
                        }}
                        /> */}
                        <a href="https://github.com/abdofaki">
                        <FaGithub size={30} style={{
                            color:"white"
                            ,marginRight:"1rem"
                        }}/>
                        </a>

                        {/* <FaInstagram size={30} style={{
                            color: "white"
                            , marginRight: "1rem"
                        }}
                        /> */}

                        <a href="https://linkedin.com/in/abdoelfaki ">
                        <FaLinkedin size={30} style={{
                            color: "white"
                            , marginRight: "1rem"
                        }} />
                        </a>

                    </div>
                </div>
            </div>
            <p class="copyright">© 2023 Abdo Alrahman M El-Faki.</p>
        </div>
    )
}

export default Footer
