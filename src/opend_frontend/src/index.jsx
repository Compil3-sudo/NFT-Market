import { opend_backend } from "../../declarations/opend_backend";
import { createRoot } from 'react-dom/client';

import React from "react";
import App from "./components/App";
import { Principal } from "@dfinity/principal";

const CURRENT_USER_ID = Principal.fromText("2vxsx-fae");
export default CURRENT_USER_ID;

const init = async () => {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<App />);
};

init();
