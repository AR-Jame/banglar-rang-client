// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCokUTqVYIpcTV1FvZWekxb5XdmOIXM4E8",
  authDomain: "banglar-rang.firebaseapp.com",
  projectId: "banglar-rang",
  storageBucket: "banglar-rang.firebasestorage.app",
  messagingSenderId: "942524932841",
  appId: "1:942524932841:web:17f9eba47d3883c2f80678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth