import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyDpd4VJEaaUbDpYnJXDK3HwRip-3_cLTCk",
    authDomain: "quick-store-demo.firebaseapp.com",
    projectId: "quick-store-demo",
    storageBucket: "quick-store-demo.appspot.com",
    messagingSenderId: "379757246540",
    appId: "1:379757246540:web:5609271dbc189973295ce9"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots:true });

export default firebase;