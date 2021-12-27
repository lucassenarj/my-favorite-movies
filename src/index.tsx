import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loader } from "./components";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/elegant-icons.css";
import "./assets/css/slicknav.min.css";
import "./assets/css/style.css";

const Home  = React.lazy(() => import("./pages/Home"));
const Details  = React.lazy(() => import("./pages/Details"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/my-favorite-movies/">
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:slug" element={<Details />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
