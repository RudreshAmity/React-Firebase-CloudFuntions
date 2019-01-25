import React from 'react';
import ProjectSummary from './ProjectSummary'  // importing ProjectSummary
import { Link } from 'react-router-dom'
//receiving props from dashboard.js
const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">
           { projects && projects.map(project => { // here if we have projects then it will execute projects.map
               return( //passing each project as props to Project summary
                    //key should always associated with parent element only
                    <Link to={'/project/'+project.id} key={project.id}>  
                        <ProjectSummary project={project}/>
                    </Link>    
               )
           })}        
        </div>
    )
}

export default ProjectList;
