// This file is the bridge between the App.js file and the web browser

import React, { StrictMode } from "react"; // React
import { createRoot } from "react-dom/client"; // Library in React to talk to the web browser (React DOM)
import "./styles.css"; // CSS file called for styling components

import App from "./App"; // Call the created components created in the App.js file

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);