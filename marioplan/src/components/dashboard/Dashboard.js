import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase' // we want to use this thing as HOC at the bottom to connect this component with firstore collection.
import { compose } from 'redux' 
class Dashboard extends Component{
    render(){
        //console.log(this.props);
        const {projects} = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}
// this function takes in the state of our component
const mapStateToProps = (state) => {
     //console.log(state);
    return{  //returning object 
        projects:   state.firestore.ordered.projects // loading firestore data you can see on your console for dot operation I have used.
        //old comment //project is the property in rootReducer which is accessing the projects from projectReducer
    }
}

export default compose(
        connect(mapStateToProps),
        firestoreConnect([  // firestore connect to single collection
            { collection: 'projects' }
    ])
  )(Dashboard);