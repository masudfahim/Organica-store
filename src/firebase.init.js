// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlWvlhIAxapGta6yoNsmQakhz6KRz9HsA",
    authDomain: "assignment-11-5ce85.firebaseapp.com",
    projectId: "assignment-11-5ce85",
    storageBucket: "assignment-11-5ce85.appspot.com",
    messagingSenderId: "150042954647",
    appId: "1:150042954647:web:0d2ac7339e3d89fca752d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;