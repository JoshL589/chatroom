import "./App.css";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBzGMX_cIG2eK8ozU79BfNg2rdktOSY1lI",
  authDomain: "chatroom-c75b0.firebaseapp.com",
  projectId: "chatroom-c75b0",
  storageBucket: "chatroom-c75b0.appspot.com",
  messagingSenderId: "189973780269",
  appId: "1:189973780269:web:b88c16a4ebc3a4aacf65a4",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
