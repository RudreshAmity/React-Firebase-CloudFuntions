import React from 'react';
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
//receiving props from dashboard.js
const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">
           { projects && projects.map(project => { // here if we have projects then it will execute projects.map
               return( //passing each project as props to Project summary
               <Link to={'/project/'+project.id}>
                   <ProjectSummary project={project} key={project.id}/>
               </Link>    
               )
           })}        
        </div>
    )
}

export default ProjectList;
