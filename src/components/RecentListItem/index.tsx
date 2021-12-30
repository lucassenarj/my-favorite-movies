import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import generateUrlFriendly from "../../helpers/generateUrlFriendly";
import MovieListItem from "../../types/MovieListItem";

const RecentListItem: React.FC<MovieListItem> = (movie) => {
  const slug = generateUrlFriendly(`${movie.title}`);
  const navigate = useNavigate();
  return (
    <div 
      className="product__sidebar__view__item set-bg"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movie.backdrop_path})` }}
      onClick={() => navigate(`/movie/${slug}/${movie.id}`)}
    >
      <div className="ep">{ movie.vote_average.toFixed(1) } / 10</div>
      <div className="view">
        <i className="fa fa-check"></i> {movie.vote_count}
      </div>
      <h5>
        <Link to={`movie/${slug}/${movie.id}`}>
          { movie.title }
        </Link>
      </h5>
    </div>
  );
};

export default RecentListItem;
