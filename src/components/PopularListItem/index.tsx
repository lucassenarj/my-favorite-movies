import React from "react";
import { Link, useNavigate } from "react-router-dom";
import generateUrlFriendly from "../../helpers/generateUrlFriendly";
import MovieListItem from "../../types/MovieListItem";
import "./style.scss";

const PopularListItem: React.FC<MovieListItem> = (movie) => {
  const slug = generateUrlFriendly(`${movie.title}`);
  const navigate = useNavigate();
  return (
    <div className="product__sidebar__comment__item" onClick={() => navigate(`/movie/${slug}/${movie.id}`)}>
      <div className="product__sidebar__comment__item__pic">
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="product__sidebar__comment__item__text">
        <ul>
          <li>Active</li>
          <li>Movie</li>
        </ul>
        <h5>
          <Link to={`movie/${slug}/${movie.id}`}>{ movie.title }</Link>
        </h5>
        <span>
          <i className="fa fa-eye"></i> {movie.popularity} Viewes
        </span>
      </div>
    </div>
  );
};

export default PopularListItem;
