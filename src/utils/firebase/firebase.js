// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs-ZbXQ5LhXzKel2ZtSsDvw5gaisovaj0",
  authDomain: "tedx22-e5bf6.firebaseapp.com",
  projectId: "tedx22-e5bf6",
  storageBucket: "tedx22-e5bf6.appspot.com",
  messagingSenderId: "502378086555",
  appId: "1:502378086555:web:ef61c06ba42f3b314e463e",
  measurementId: "G-LCQ1K1PF1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
