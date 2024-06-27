import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: `${process.env.REACT_FIREBASE_API}`,
  authDomain: "airy-web-365416.firebaseapp.com",
  projectId: "airy-web-365416",
  storageBucket: "airy-web-365416.appspot.com",
  messagingSenderId: "238270421139",
  appId: "1:238270421139:web:bc6f0d50232a12e623d566",
  measurementId: "G-7Z2WX54Q20",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
