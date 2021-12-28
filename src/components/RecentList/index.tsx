import React from "react";
import Movie from "../../types/Movie";
import MovieList from "../../types/MovieList";
import { RecentListItem } from "./../";
import "./style.css";

const RecentList: React.FC<MovieList> = ({title, movies}) => {
  const list = movies.sort(() => .5 - Math.random()).slice(0,5);
  return (
    <div className="product__sidebar__view">
      <div className="section-title">
        <h5>{ title }</h5>
      </div>
      <div className="filter__gallery">
        { list.map((movie: Movie, key: number) => <RecentListItem {...movie} key={key} />) }
      </div>
    </div>
  );
};

export default RecentList;
