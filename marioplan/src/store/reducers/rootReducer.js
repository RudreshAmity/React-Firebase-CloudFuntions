import authReducer from './authReducer';
import projectReducer from './projectReducer';
/* importing combine-reducer from redux library for combining our reducer */
import { combineReducers } from 'redux';

/* combining reducers */
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer