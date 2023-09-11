// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3cFe-WsWjUaHE2zQbxOsDG9futBFk23o",
  authDomain: "miniblog-react-c87e3.firebaseapp.com",
  projectId: "miniblog-react-c87e3",
  storageBucket: "miniblog-react-c87e3.appspot.com",
  messagingSenderId: "609470017288",
  appId: "1:609470017288:web:b9a4ccc913bf5b2f8746bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
