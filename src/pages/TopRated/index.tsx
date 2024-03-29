import React, { Fragment, Suspense } from "react";
import { createTopRatedResource } from "../../api/resources/topRatedResource";
import { Breadcrumb, Header, Footer } from "./../../components";

const CategoryList = React.lazy(() => import("./../../components/CategoryList"));
const Sidebar = React.lazy(() => import("./../../components/Sidebar"));


function TopRated() {
  const resource = createTopRatedResource();
  
  return (
    <Fragment>
      <Header title="Top Rated Movies - My Favorite Movies" />
      <Breadcrumb name="Top rated" />
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Suspense fallback={<span>Loading trendings</span>}>
                <CategoryList resource={resource} title="Tredings" displayAll={true} target="topRated" />
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
    </Fragment>
  );
};

export default TopRated;
