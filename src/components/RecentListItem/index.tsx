import React from "react";
import Movie from "../../types/Movie";
import { Link } from "react-router-dom";
import "./style.scss";
import generateUrlFriendly from "../../helpers/generateUrlFriendly";

const RecentListItem: React.FC<Movie> = (movie) => {
  const slug = generateUrlFriendly(`${movie.title}`);
  return (
    <Link to={`movie/${slug}`}>
      <div className="product__sidebar__view__item set-bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movie.backdrop_path})` }}>
        <div className="ep">{ movie.vote_average }</div>
        <div className="view">
          <i className="fa fa-eye"></i> {movie.popularity}
        </div>
        <h5>
          <Link to={`movie/${slug}`}>
            { movie.title }
          </Link>
        </h5>
      </div>
    </Link>
  );
};

export default RecentListItem;
