import React,{useState} from 'react'
import vm from "../assets/vm.jpg"
import WorkCardData from "./WorkCardData"
import "./ProjectDetailStyles.css"




const ProjectDetail = (props) => {
   
    const[click,setClick]= useState(false);
    const handleClick = ()=>{

        setClick(!click);
    }
    
    

    return (

        <div className="project-cardd">
            <h2 className="project-headingg">{props.title}</h2>
            <img src={props.imgsrc} alt="image" />
            <div className="project-details">
                <p>{props.text}</p>
            </div>
                <div className="project-cardd-body">
                    <button className="showHide" onClick={handleClick}>Technologies used</button>
                   {click?<h4>
                    <ul className="listList">
                          {props.tech.map((value, index) => {
                                return (
                                     <li className="ll">{value}</li>
                                 )
                             })}
                         </ul>
                       </h4>:""}
                    
                </div>
            
        </div>




        // <div className="project-containerr">

        //     <h1 className="project-headingg">{props.title}

        //     </h1>

        //     <p className="project-paragraph">{props.text}</p>

        //     <div className="project-body">

        //         <div className="project-img-container">
        //             <img src={props.imgsrc} className="project-img" />
        //         </div>

        //      <div>
        //       <div className="glass">
        //                 <p className="p-underline">Technologies used</p>
        //                <h4>

        //                 <ul className="listList">
        //                     {props.tech.map((value, index) => {
        //                         return (
        //                             <li className="ll">{value}</li>
        //                         )
        //                     })}
        //                 </ul>
        //                 </h4>
        //             </div>
        //             </div>


        //     </div>


        // </div>
    )
}

export default ProjectDetail
