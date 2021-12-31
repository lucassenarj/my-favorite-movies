import React, { Suspense } from "react";
import { createHomePageResource } from "./../../api/resources/homeResource";
// import {
//   CategoryList,
//   Footer,
//   Header,
//   Hero,
//   Sidebar,
// } from "./../../components";

const CategoryList = React.lazy(() => import("./../../components/CategoryList"));
const Footer = React.lazy(() => import("./../../components/Footer"));
const Header = React.lazy(() => import("./../../components/Header"));
const Hero = React.lazy(() => import("./../../components/Hero"));
const Sidebar = React.lazy(() => import("./../../components/Sidebar"));

const resource = createHomePageResource();

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header title="My favorite movies - Home Page" />
      <Hero resource={resource} />
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Suspense fallback={<span>Loading trendings</span>}>
                <CategoryList resource={resource} title="Tredings" target="trending" />
              </Suspense>
              <Suspense fallback={<span>Loading top rated</span>}>
                <CategoryList resource={resource} title="Top Rated" target="topRated" />
              </Suspense>
              <Suspense fallback={<span>Loading trendings</span>}>
                <CategoryList resource={resource} title="Documentaries" target="documentaries" />
              </Suspense>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <Suspense fallback={<h1>Loading</h1>}>
                <Sidebar resource={resource} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
