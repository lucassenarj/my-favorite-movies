import getNowPlaying from "../tmdb/movie/getNowPlaying";
import getTopRated from "../tmdb/movie/getTopRated";
import getUpcoming from "../tmdb/movie/getUpcoming";
import { wrapPromise } from "./../";

export const createTopRatedResource = () => {
  return {
    topRated: wrapPromise(getTopRated()),
    upcoming: wrapPromise(getUpcoming()),
    nowPlaying: wrapPromise(getNowPlaying()),
  };
};
