import React from "react";
import calculateRate from "../../helpers/calculateRate";
import Genre from "../../types/Genre";
import MovieDetails from "../../types/MovieDetails";
import ProductionCompanies from "../../types/ProductionCompanies";
import SpokenLanguages from "../../types/SpokenLanguages";
import "./style.scss";

interface Props {
  resource: {
    details: {
      read: Function,
    }
  };
}

function Movie({ resource }: Props) {
  const { data } = resource.details.read();
  const movie: MovieDetails = { ...data };
  const rates = calculateRate(movie.vote_average);
  return (
    <div className="anime__details__content">
      <div className="row">
        <div className="col-lg-3">
          <div className="anime__details__pic set-bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})` }}>
            <div className="comment"><i className="fa fa-comments"></i> 11</div>
            <div className="view"><i className="fa fa-eye"></i> 9141</div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="anime__details__text">
            <div className="anime__details__title">
              <h3>{ movie.title }</h3>
              <span>{ movie.original_title }</span>
            </div>
            <div className="anime__details__rating">
              <div className="rating">
                {rates}
              </div>
              <span>{movie.vote_count} Votes</span>
            </div>
            <p>{movie.overview}</p>
            <div className="anime__details__widget">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <ul>
                    <li><span>Language:</span> { movie.spoken_languages.map((language: SpokenLanguages) => language.name).join(', ') }</li>
                    <li><span>Studios:</span> { movie.production_companies.map((studio: ProductionCompanies) => studio.name).join(', ') }</li>
                    <li><span>Release Date:</span> { new Date(movie.release_date).toLocaleDateString() }</li>
                    <li><span>Status:</span> { movie.status }</li>
                    <li><span>Genre:</span> { movie.genres.map((genre: Genre) => genre.name).join(', ') }</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6">
                  <ul>
                    <li><span>Budget:</span> $ { movie.budget.toLocaleString() }</li>
                    <li><span>Rating:</span> { movie.vote_average}/10</li>
                    <li><span>Votes:</span> {movie.vote_count} times </li>
                    <li><span>Duration:</span> { movie.runtime } minutes</li>
                    <li><span>Popularity:</span> { movie.popularity.toLocaleString() }</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="anime__details__btn">
              <a href="/" className="follow-btn"><i className="fa fa-heart-o"></i> Follow</a>
              <a href="/" className="watch-btn"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
