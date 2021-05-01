# Slack-Clone Project

The Goal of this project was to learn how to use the Front-End Framework React.js.
@Credit to CleverProgrammers

## Project setup

```
npm install
```

## Firebase Configuration

The file **Firebase.js** has to be created in the folder src > setting.
It needs the following information =>

```
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN,
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
```

## Compiles and hot-reloads for development

```
npm start
```
