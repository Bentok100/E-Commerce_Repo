import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-6cfa5.firebaseapp.com",
  projectId: "loginonecart-6cfa5",
  storageBucket: "loginonecart-6cfa5.firebasestorage.app",
  messagingSenderId: "158941879081",
  appId: "1:158941879081:web:70155e751770ac504b7538",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
