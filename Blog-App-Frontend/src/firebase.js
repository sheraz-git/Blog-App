import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyANNcVMQ8uMgbNp4FYJ2t8FL3v658f6czQ",
  authDomain: "blog-app-a0090.firebaseapp.com",
  projectId: "blog-app-a0090",
  storageBucket: "blog-app-a0090.appspot.com",
  messagingSenderId: "298624229245",
  appId: "1:298624229245:web:98b1198cbbab591fa93614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);