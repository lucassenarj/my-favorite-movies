import React from "react";
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
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__slider">
          <div className="hero__items set-bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movie.backdrop_path})` }}>
            <div className="row">
              <div className="col-lg-6">
                <div className="hero__text">
                  <div className="label">
                    Adventure
                  </div>
                  <h2>{ movie.title }</h2>
                  <p>{ movie.overview }</p>
                  <a href="/">
                    <span>Watch Now</span>
                    <i className="fa fa-angle-right"></i>
                  </a>
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
