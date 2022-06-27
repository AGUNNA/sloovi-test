// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1BeUGN_gMYtH_QhHuWaXljmsr4clXtAo",
  authDomain: "sloovi-test.firebaseapp.com",
  projectId: "sloovi-test",
  storageBucket: "sloovi-test.appspot.com",
  messagingSenderId: "683098747509",
  appId: "1:683098747509:web:ed2051489454e0d1c57e3c",
  measurementId: "G-H55MSN0JC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);