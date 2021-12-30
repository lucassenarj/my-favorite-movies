import React from "react";
import { Link } from "react-router-dom";
import generateUrlFriendly from "../../helpers/generateUrlFriendly";
import getMovieGenreList from "../../helpers/getMovieGenreList";
import MovieListItem from "../../types/MovieListItem";
import "./style.scss";

interface Props {
  resource: {
    latest: {
      read: Function,
    }
  };
}

const Hero: React.FC<Props> = ({ resource }) => {
  const popular = resource.latest.read();
  const random: number = Math.floor(Math.random() * 19);
  const movie: MovieListItem = popular.data.results[random];
  const slug = generateUrlFriendly(`${movie.title}`);
  const genresList = getMovieGenreList(movie.genre_ids);
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__slider">
          <div className="hero__items set-bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movie.backdrop_path})` }}>
            <div className="row">
              <div className="col-lg-6">
                <div className="hero__text">
                  {
                    genresList.map((genre) => (
                      <div className="label" key={genre.id}>
                        <Link to={`/category/${generateUrlFriendly(genre.name)}`}>
                          {genre.name}
                        </Link>
                      </div>
                    ))
                  }
                  <h2>{ movie.title }</h2>
                  <p>{ movie.overview }</p>
                  <Link to={`/movie/${slug}/${movie.id}`}>
                      <span>Details</span>
                      <i className="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
