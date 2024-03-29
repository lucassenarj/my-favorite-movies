import React from "react";
import { CategoryListItem } from "..";
import MovieListItem from "../../types/MovieListItem";
import "./style.scss";

interface Props {
  resource: any;
  title: string;
  target: string;
  displayAll?: boolean;
}

const CategoryList: React.FC<Props> = ({ resource, target, title, displayAll = false }) => {
  const list = resource[target].read();
  const movies = list.data.results;
  return (
    <div className="trending__product">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8">
          <div className="section-title">
            <h4>{ title }</h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          {
            !displayAll && (
              <div className="btn_all">
                <a href="/" className="primary-btn">
                  View All <span className="arrow_right"></span>
                </a>
              </div>
            )
          }
        </div>
      </div>
      <div className="row">
        {
          displayAll ? (
            movies.map((movie: MovieListItem, key: number) => (
              <CategoryListItem {...movie} key={key} />
            ))
          ) : (
            movies.sort(() => 0.5 - Math.random()).slice(0, 6).map((movie: MovieListItem, key: number) => (
              <CategoryListItem {...movie} key={key} />
            ))
          )
        }
      </div>
    </div>
  );
};

export default CategoryList;