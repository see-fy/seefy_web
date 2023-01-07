// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsLs8xwl5MiMssV0SiNuORF1emJlafwb4",
  authDomain: "seefy-1cbe0.firebaseapp.com",
  projectId: "seefy-1cbe0",
  storageBucket: "seefy-1cbe0.appspot.com",
  messagingSenderId: "900479741736",
  appId: "1:900479741736:web:c9f436b53f253f73f42a1d",
  measurementId: "G-BV15JT9QFC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { auth, db, storage, analytics };
