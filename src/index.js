// NPM Packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import App from "App";
import { AuthProvider } from "state/AuthProvider";
import { StreamingProvider } from "state/StreamingProvider";
import { SearchProvider } from "state/SearchProvider";

ReactDOM.render(
  <AuthProvider>
    <StreamingProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </StreamingProvider>
  </AuthProvider>,
  document.getElementById("root")
);
