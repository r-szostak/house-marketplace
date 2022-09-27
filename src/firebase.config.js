import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcaAzwUqLr_frxxD3nrHwUNrCzKUTtVVg",
  authDomain: "house-marketplace-app-9bfae.firebaseapp.com",
  projectId: "house-marketplace-app-9bfae",
  storageBucket: "house-marketplace-app-9bfae.appspot.com",
  messagingSenderId: "809060843219",
  appId: "1:809060843219:web:ac650a158eefeaab9f1e26",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
