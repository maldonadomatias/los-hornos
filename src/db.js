// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE-NN0_hCxEZoa3F45IjZOL5m_SVG64tQ",
  authDomain: "menu-app-d307a.firebaseapp.com",
  databaseURL: "https://menu-app-d307a-default-rtdb.firebaseio.com",
  projectId: "menu-app-d307a",
  storageBucket: "menu-app-d307a.appspot.com",
  messagingSenderId: "1000297630447",
  appId: "1:1000297630447:web:ada9d230a8f93ac48de91a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;