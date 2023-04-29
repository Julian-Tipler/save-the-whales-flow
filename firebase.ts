import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxf1kGJYK3ayHiDmDT8zdn3wWgb_Kyaeo",
  authDomain: "save-the-whales-ee45b.firebaseapp.com",
  projectId: "save-the-whales-ee45b",
  storageBucket: "save-the-whales-ee45b.appspot.com",
  messagingSenderId: "761275503974",
  appId: "1:761275503974:web:64905dacac31127483e4a7",
  measurementId: "G-T4QHWGZ58Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
