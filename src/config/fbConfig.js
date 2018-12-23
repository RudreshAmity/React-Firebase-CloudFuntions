import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDhsvanR1EQENiaV-rkGpqekpwKp3OXGeg",
    authDomain: "react-firebase-3dcd6.firebaseapp.com",
    databaseURL: "https://react-firebase-3dcd6.firebaseio.com",
    projectId: "react-firebase-3dcd6",
    storageBucket: "react-firebase-3dcd6.appspot.com",
    messagingSenderId: "435277294742"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots : true });

  export default firebase;
