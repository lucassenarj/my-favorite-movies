import React from "react";
import { Link, useNavigate } from "react-router-dom";
import generateUrlFriendly from "../../helpers/generateUrlFriendly";
import getMovieGenreList from "../../helpers/getMovieGenreList";
import MovieListItem from "../../types/MovieListItem";
import "./style.scss";

const CategoryListItem: React.FC<MovieListItem> = (movie) => {
  const slug = generateUrlFriendly(`${movie.title}`);
  const navigate = useNavigate();
  const genresList = getMovieGenreList(movie.genre_ids);
  return (
    <div className="col-lg-4 col-md-6 col=sm-6" onClick={() => navigate(`/movie/${slug}/${movie.id}`)}>
      <div className="product__item">
        <div className="product__item__pic set-bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})` }}>
          <div className="ep">{ movie.vote_average }</div>
        </div>
        <div className="product__item__text">
          <ul>
            {
              genresList.map((genre) => (
                <li key={genre.id}><Link to={`/category/${generateUrlFriendly(genre.name)}`}> {genre.name} </Link></li>
              ))
            }
          </ul>
          <h5>
            <Link to="/details">{ movie.title }</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default CategoryListItem;
