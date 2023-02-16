import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topic4 from "./Component/Topic4/Topic4";
import Topic3 from "./Component/Topic3/Topic3";
import Topic2 from "./Component/Topic2/Topic2";
import Topic1 from "./Component/Topic1/Topic1";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Topic1" element={<Topic1 />}></Route>
        <Route path="/Topic2" element={<Topic2 />}></Route>
        <Route path="/Topic3" element={<Topic3 />}></Route>
        <Route path="/Topic4" element={<Topic4 />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
