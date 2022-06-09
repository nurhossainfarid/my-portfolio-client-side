// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMiOFEipOtUshnGwEHzdd_XBGMo1Vdb7U",
  authDomain: "my-portfolio-1516.firebaseapp.com",
  projectId: "my-portfolio-1516",
  storageBucket: "my-portfolio-1516.appspot.com",
  messagingSenderId: "711916084946",
  appId: "1:711916084946:web:b99e2e9cad6605f61b570b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;