import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </RelayEnvironmentProvider>,
);
