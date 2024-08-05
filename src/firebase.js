import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCPa-5ATwC-3hRg8VB2cVyMy1uG38oCTpQ",
    authDomain: "clone-98894.firebaseapp.com",
    projectId: "clone-98894",
    storageBucket: "clone-98894.appspot.com",
    messagingSenderId: "152231557295",
    appId: "1:152231557295:web:4202e430b7132c3d1e7c5a",
    measurementId: "G-WVQ5KNDGDM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(auth);

export { db, auth, provider };