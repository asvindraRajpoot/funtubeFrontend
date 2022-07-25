import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAnHfg6dXfDNM7XBTVyPA8pLm-YeIbikBo",
  authDomain: "funtube-c808b.firebaseapp.com",
  projectId: "funtube-c808b",
  storageBucket: "funtube-c808b.appspot.com",
  messagingSenderId: "1073878959023",
  appId: "1:1073878959023:web:f9d07f15098f818420655a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
