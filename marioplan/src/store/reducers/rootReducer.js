import authReducer from './authReducer';
import projectReducer from './projectReducer';
/* importing combine-reducer from redux library for combining our reducer */
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'// it know about our firestore data 

/* combining reducers */
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer // in the background this firestore reducer will automatically sync this property on state object to our data in the database is going to retrive that data for us
    // and that data is dependent on which component is currently active at that time and what data that component needs that is the data which is synced in the state by the reducer
})

export default rootReducer