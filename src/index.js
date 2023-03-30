import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyC_HKAONPI1Az9tPTl2p1BlgmliNyyZNlg",
  authDomain: "chat-react-3f380.firebaseapp.com",
  projectId: "chat-react-3f380",
  storageBucket: "chat-react-3f380.appspot.com",
  messagingSenderId: "1006091402686",
  appId: "1:1006091402686:web:311ec80096899232e78def",
  measurementId: "G-S0VW4QYV16"
});
export const Context = createContext(null);

const auth = getAuth();
const database = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{ auth, database }}>
    <App />
  </Context.Provider>
);
