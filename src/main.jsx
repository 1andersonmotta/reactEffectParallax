// import { render } from "react-dom";
import App from "./App.jsx";


const rootElement = document.getElementById("root");

import { createRoot } from 'react-dom/client';
const root = createRoot(rootElement);
root.render(<App />, rootElement);