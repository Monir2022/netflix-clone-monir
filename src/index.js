// NPM Packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import App from "App";
import { AuthProvider } from "state/AuthProvider";
import { StreamingProvider } from "state/StreamingProvider";

ReactDOM.render(
  <AuthProvider>
    <StreamingProvider>
      <App />
    </StreamingProvider>
  </AuthProvider>,
  document.getElementById("root")
);
