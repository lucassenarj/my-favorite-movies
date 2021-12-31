import React, { useEffect, useState, Fragment, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, Header, Footer } from "./../../components";
import genresList from "../../helpers/genresList";
import generateUrlFriendly from "../../helpers/generateUrlFriendly";
import { createCategoryResource } from "../../api/resources/categoryResource";
import Genre from "../../types/Genre";

const CategoryList = React.lazy(() => import("./../../components/CategoryList"));
const Sidebar = React.lazy(() => import("./../../components/Sidebar"));


function Categories() {
  const [genre, setGenre] = useState<Genre>({ id: 28, name: "Action" });
  let { slug = "action" } = useParams();

  useEffect(() => {
    const founded = genresList.find(({ name }) => generateUrlFriendly(name) === slug);
    if (founded) setGenre(founded);
  }, [slug]);

  const resource = createCategoryResource(genre.id, 1);
  
  return (
    <Fragment>
      <Header title="Category page - My Favorite Movies" />
      <Breadcrumb />
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Suspense fallback={<span>Loading trendings</span>}>
                <CategoryList resource={resource} title={genre.name} displayAll={true} target="category" />
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

export default Categories;
