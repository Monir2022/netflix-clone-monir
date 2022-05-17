// NPM Packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import App from "App";
import { AuthProvider } from "state/AuthProvider";
import { StreamingProvider } from "state/StreamingProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <StreamingProvider>
      <App/>
    </StreamingProvider>
  </AuthProvider>
);
