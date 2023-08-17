import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD2AUwF75s92P77y9zKBFUqbBOA_Zds35Q",
  authDomain: "smart-home-project-d0e12.firebaseapp.com",
  projectId: "smart-home-project-d0e12",
  storageBucket: "smart-home-project-d0e12.appspot.com",
  messagingSenderId: "428158036412",
  appId: "1:428158036412:web:ef674b9f9cf070d20863b9",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };
