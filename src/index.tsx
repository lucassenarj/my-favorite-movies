import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loader } from "./components";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/elegant-icons.css";
import "./assets/css/slicknav.min.css";
import "./assets/css/style.scss";

const Categories  = React.lazy(() => import("./pages/Categories"));
const Details  = React.lazy(() => import("./pages/Details"));
const Home  = React.lazy(() => import("./pages/Home"));
const TopRated  = React.lazy(() => import("./pages/TopRated"));
const Tredings  = React.lazy(() => import("./pages/Tredings"));

const App = () => {
  return (
    <BrowserRouter basename="/my-favorite-movies/">
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:slug/:id" element={<Details />} />
          <Route path="/category/:slug" element={<Categories />} />
          <Route path="/tredings" element={<Tredings />} />
          <Route path="/toprated" element={<TopRated />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}


/*
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
