import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5QHXC2YBLT6zH5ZhwKtxns-1u1NKQSS4",
  authDomain: "e-commercecomiditas.firebaseapp.com",
  projectId: "e-commercecomiditas",
  storageBucket: "e-commercecomiditas.appspot.com",
  messagingSenderId: "656541270261",
  appId: "1:656541270261:web:cfb974c18dceab909b85bc",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <div className="fondo">
      <App />
    </div>
  </ChakraProvider>
);
