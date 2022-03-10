import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import Admin from "./components/admin/Admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
