import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA8HQl8Lap0XAmKnOhGNFbsOKBry-__Kl8",
    authDomain: "slack-clone-11bb9.firebaseapp.com",
    projectId: "slack-clone-11bb9",
    storageBucket: "slack-clone-11bb9.appspot.com",
    messagingSenderId: "783701787533",
    appId: "1:783701787533:web:394c1155c3ba89849373c4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;