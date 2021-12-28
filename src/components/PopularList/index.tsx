import React from "react";
import Movie from "../../types/Movie";
import MovieList from "../../types/MovieList";
import { PopularListItem } from "./../";
import "./style.css";

const PopularList: React.FC<MovieList> = ({ title, movies }) => {
  const list = movies.sort(() => .5 - Math.random()).slice(0,5);
  return (
    <div className="product__sidebar__comment">
      <div className="section-title">
        <h5>{ title }</h5>
      </div>
      {
        list.map((movie: Movie, key: number) => <PopularListItem {...movie} key={key} />)
      }
    </div>
  );
};

export default PopularList;
