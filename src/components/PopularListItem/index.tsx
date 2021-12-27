import React from "react";
import { Link } from "react-router-dom";
import generateUrlFriendly from "../../helpers/generateUrlFriendly";
import Movie from "../../types/Movie";
import "./style.css";

const PopularListItem: React.FC<Movie> = (movie) => {
  const slug = generateUrlFriendly(`${movie.title}`);
  return (
    <div className="product__sidebar__comment__item">
      <Link to={`movie/${slug}`}>
        <div className="product__sidebar__comment__item__pic">
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="product__sidebar__comment__item__text">
          <ul>
            <li>Active</li>
            <li>Movie</li>
          </ul>
          <h5>
            <Link to={`movie/${slug}`}>{ movie.title }</Link>
          </h5>
          <span>
            <i className="fa fa-eye"></i> {movie.popularity} Viewes
          </span>
        </div>
      </Link>
    </div>
  );
};

export default PopularListItem;
