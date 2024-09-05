import React from 'react'
import ProjectDetail from './ProjectDetail'
import WorkCardData from "./WorkCardData"

const ProjectStructure = () => {
    return (
        <div className="project-containerr">
           
           {WorkCardData.map((val,index)=>{

               return(
                   <ProjectDetail key={index}
                   title={val.title}
                   text={val.text}
                   imgsrc={val.imgsrc}
                   tech={val.tech}
                   />
               )
           })}
            
        </div>
    )
}

export default ProjectStructure
