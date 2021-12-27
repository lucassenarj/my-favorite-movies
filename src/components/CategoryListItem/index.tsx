import React from "react";
import { Link } from "react-router-dom";
import generateUrlFriendly from "../../helpers/generateUrlFriendly";
import Movie from "./../../types/Movie";
import "./style.css";

const CategoryListItem: React.FC<Movie> = (movie) => {
  const slug = generateUrlFriendly(`${movie.title}`);
  return (
    <div className="col-lg-4 col-md-6 col=sm-6">
      <Link to={`/movie/${slug}`}>
        <div className="product__item">
          <div className="product__item__pic set-bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})` }}>
            <div className="ep">{ movie.vote_average }</div>
            <div className="comment">
              <i className="fa fa-eye"></i> 11
            </div>
            <div className="view">
              <span className="fa fa-eye"></span> {movie.vote_count}
            </div>
          </div>
          <div className="product__item__text">
            <ul>
              <li>Active</li>
              <li>Movie</li>
            </ul>
            <h5>
              <Link to="/details">{ movie.title }</Link>
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryListItem;
