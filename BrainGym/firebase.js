// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where
} from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDabE8BEXQknn_AJ8i18UNscrI1g_-5h5s",
  authDomain: "braingym-db041.firebaseapp.com",
  projectId: "braingym-db041",
  storageBucket: "braingym-db041.appspot.com",
  messagingSenderId: "578803923022",
  appId: "1:578803923022:web:e2928f285bbc318c826b1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
// const storage = getStorage(firebaseApp, "gs://my-custom-bucket");

export { collection, addDoc, getDocs, db, updateDoc, doc, deleteDoc, query, where, storage };