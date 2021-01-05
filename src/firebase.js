import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBQ-mKvAND4O_IMbWDeOtwrhYk83pm2kPo",
    authDomain: "facebook-clone-778c0.firebaseapp.com",
    projectId: "facebook-clone-778c0",
    storageBucket: "facebook-clone-778c0.appspot.com",
    messagingSenderId: "812867331382",
    appId: "1:812867331382:web:f7a02ee4add3b4d4de7f97"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;