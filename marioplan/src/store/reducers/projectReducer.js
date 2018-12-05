const initState = {
    projects : [
        {id: '1', title: 'help him help him', content: 'blah blah balh'},
        {id: '2', title: 'collect all the star', content: 'blah blah balh'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah balh'}
    ]
}

const projectReducer = ( state = initState, action ) => {
    switch(action.type){
        case 'CREATE_PROJECT':
               console.log('created project',action.project);
               break;
        default: console.log('problem in projectReducer');
        
    }   
    return state
}
export default projectReducer;