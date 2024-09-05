import "./WorkExperienceStyle.css"

import React from 'react'

import WorkExperienceCard from "./WorkExperienceCard"
import WorkExperienceData from "./WorkExperienceData"

const WorkExperience= () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Work experience</h1>
            <div className="project-container">
               {WorkExperienceData.map((val, ind) => {
                    return (
                        <WorkExperienceCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default WorkExperience
