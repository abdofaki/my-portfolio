import "./WorkExperienceStyle.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WorkExperienceCard = (props) => {
    return (
        <div className="project-card">
        <img src={props.imgsrc} alt="image"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
        </div>
        <div className="workE-btns">
            
            <a href={props.view} target="_blank" className="workbtn">
                   Live Preview
                </a>

        </div>
    </div>
    )
}

export default WorkExperienceCard
