// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-hR_1_YJvRTEH1306jjdB8atsITLHQlw",
  authDomain: "sayni-store.firebaseapp.com",
  projectId: "sayni-store",
  storageBucket: "sayni-store.appspot.com",
  messagingSenderId: "848816621531",
  appId: "1:848816621531:web:1e20b49a58edc35cdf49fe",
  measurementId: "G-36Z67ZQS1G"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);