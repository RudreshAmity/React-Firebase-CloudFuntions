import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase' // we want to use this thing as HOC at the bottom to connect this component with firstore collection.
import { compose } from 'redux'

const ProjectDetails = (props) => {
    
    //console.log(props);
    const { project } = props; 
    if(project){
      return(
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
              <span className="card-title">{ project.title }</span>
              <p>{ project.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
              <div>Posted by { project.authorFirstName } { project.authorLastName } </div>
              <div>2nd Sept, 2am</div>
          </div>
        </div>       
      </div>
     ) 
    }
    else{
        return(
              <div className="container center">
                  <p>Loading Project...</p>
              </div>
            )
    }

   
}
const mapStateToProps = (state, ownProps) => {  //ownProps is props of the component 
    //console.log(state);
    const id = ownProps.match.params.id;   // ownProps is used to use props in this mapState to props, as we can't access props in this fuction directly 
    const projects = state.firestore.data.projects; // see on console using console.log(state)
    const project = projects ? projects[id] : null // projects is the object that we see in our and if there is any project then we find the project on the projects object with that id  
    return{
       project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([  // firestore connect to single collection
        { collection: 'projects' }
])
)(ProjectDetails);