// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKmAbYjEoGI9p-9jsc0SeRWboAM3MC4cI",
  authDomain: "event-management-jamiulalam18.firebaseapp.com",
  projectId: "event-management-jamiulalam18",
  storageBucket: "event-management-jamiulalam18.appspot.com",
  messagingSenderId: "812726207867",
  appId: "1:812726207867:web:3679e537ce290bb79a69de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);