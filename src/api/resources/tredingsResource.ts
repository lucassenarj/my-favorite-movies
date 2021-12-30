import getNowPlaying from "../tmdb/movie/getNowPlaying";
import getUpcoming from "../tmdb/movie/getUpcoming";
import getTrending from "../tmdb/trending/getTrending";
import { wrapPromise } from "./../";

export const createTredingsResource = () => {
  return {
    trending: wrapPromise(getTrending()),
    upcoming: wrapPromise(getUpcoming()),
    nowPlaying: wrapPromise(getNowPlaying()),
  };
};
