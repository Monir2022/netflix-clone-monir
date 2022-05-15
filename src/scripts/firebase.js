//NPM Packages
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBnlv-KQ51NrYx_9kiSk0tw8SuwmpO4WdU",
  authDomain: "netflix-clone-monir.firebaseapp.com",
  projectId: "netflix-clone-monir",
  storageBucket: "netflix-clone-monir.appspot.com",
  messagingSenderId: "147799176605",
  appId: "1:147799176605:web:a08210a788e07a28412b74",
  measurementId: "G-0B3REWWP18"
};


const firebaseInstance = initializeApp(firebaseConfig);

export const fireStoreInstance = getFirestore(firebaseInstance);
export const authInstance = getAuth(firebaseInstance);
