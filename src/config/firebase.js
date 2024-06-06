import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyDqLzhFj9KUkJZqIUVRx1JMgHmBXNm72Z0",
    authDomain: "app-climafausto.firebaseapp.com",
    projectId: "app-climafausto",
    storageBucket: "app-climafausto.appspot.com",
    messagingSenderId: "304624611919",
    appId: "1:304624611919:web:9fa68d82ab5895eb79b03a"
};

const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app); 
export const db = getFirestore(app);