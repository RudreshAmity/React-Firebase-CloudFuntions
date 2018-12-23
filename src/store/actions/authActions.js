export const signIn = (credentials) => { //credentitial are just gonna be email and password
    return (dispatch, getState, {getFirebase}) => {//getFirebase is used to sign the user in
         const firebase = getFirebase();
         firebase.auth().signInWithEmailAndPassword(
             credentials.email,
             credentials.password
         ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})// we don't need to pass any additional data here so we are just apssing the type
         }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err}) //if ligin is unsuccessful
         })
    } 
}