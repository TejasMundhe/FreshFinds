import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlvETW4YSNT64ouDVWKP189Hbx2l_dMZE",
  authDomain: "storytelling-app-62748.firebaseapp.com",
  databaseURL: "https://storytelling-app-62748-default-rtdb.firebaseio.com",
  projectId: "storytelling-app-62748",
  storageBucket: "storytelling-app-62748.appspot.com",
  messagingSenderId: "888145995554",
  appId: "1:888145995554:web:24bed1b5c279f9cd8d677b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();