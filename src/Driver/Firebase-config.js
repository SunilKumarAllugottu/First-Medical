// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzYWMANEfhozofD7bQdkzhsKos1lL9njw",
  authDomain: "first-medicals.firebaseapp.com",
  projectId: "first-medicals",
  storageBucket: "first-medicals.appspot.com",
  messagingSenderId: "385623216747",
  appId: "1:385623216747:web:c020f3c4c5e6c78698d72e",
  measurementId: "G-HQLRSCX5Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);