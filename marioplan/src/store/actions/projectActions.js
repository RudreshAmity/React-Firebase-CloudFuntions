export const createProject = (project) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
           //make async call to database
           const firestore = getFirestore;  //this give us reference to firestore database
           firestore.collection('projects').add({ //passing object {} into this add method
                ...project,
                authorFirstName : 'Rudresh',
                authorLastName : 'Narwal',
                authorId : 12345,
                createdAt : new Date()
           }).then(() => {
                dispatch({ type : 'CREATE_PROJECT', project }); //disptaching action to reducer 
           }).catch((err) => {
               dispatch({ type: 'CREATE_PROJECT_ERROR', err });
           })
          
    }
};