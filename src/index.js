import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./components/admin/Admin";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
