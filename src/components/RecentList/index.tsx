import React from "react";
import MovieList from "../../types/MovieList";
import MovieListItem from "../../types/MovieListItem";
import { RecentListItem } from "./../";
import "./style.scss";

const RecentList: React.FC<MovieList> = ({title, movies}) => {
  const list = movies.sort(() => .5 - Math.random()).slice(0,5);
  return (
    <div className="product__sidebar__view">
      <div className="section-title">
        <h5>{ title }</h5>
      </div>
      <div className="filter__gallery">
        { list.map((movie: MovieListItem, key: number) => <RecentListItem {...movie} key={key} />) }
      </div>
    </div>
  );
};

export default RecentList;
