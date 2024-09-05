import "./WorkCardStyles.css"

import React from 'react'
import { Link, NavLink } from "react-router-dom"

const WorkCard = (props) => {
    return (
        <div className="project-card">
        <img src={props.imgsrc} alt="image"/>
        <h2 className="project-title">{props.title}</h2>
        {/* <div className="pro-details">
            <p>{props.text}</p>
        </div> */}
        <div className="pro-btns">
        <Link  to="/projects" className="btn">
        details
        </Link>
            
            {/* <a href={props.details} className="btn">
                details
                </a> */}
           
            
            <a href={props.source} target="_blank" className="btn">
                source
                </a>
            

        </div>
    </div>
    )
}

export default WorkCard
