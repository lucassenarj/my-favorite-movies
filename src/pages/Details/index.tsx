import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { createDetailsResource } from "../../api/resources/detailsResource";
import { Footer, Header } from "./../../components";

const Movie = React.lazy(() => import("./../../components/Movie"));
const ReviewList = React.lazy(() => import("./../../components/ReviewList"));
const Recommendations = React.lazy(() => import("./../../components/Recommendations"));


function Details() {
  let { id = "630" } = useParams();

  const resource = createDetailsResource(parseInt(id));

  return (
    <React.Fragment>
      <Header title="Movie Details - My favorite movie" />

      <section className="anime-details spad">
        <div className="container">
          <Suspense fallback={<span>Loading...</span>}>
            <Movie resource={resource} />
          </Suspense>
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <Suspense fallback={<span>Loading...</span>}>
                <ReviewList resource={resource} />
              </Suspense>
            </div>
            <div className="col-lg-4 col-md-4">
              <Suspense fallback={<span>Loading...</span>}>
                <Recommendations resource={resource} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Details;
