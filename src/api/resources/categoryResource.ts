import getCategory from "../tmdb/discover/getCategory";
import getNowPlaying from "../tmdb/movie/getNowPlaying";
import getUpcoming from "../tmdb/movie/getUpcoming";
import { wrapPromise } from "./../";

export const createCategoryResource = (id: number, page: number) => {
  return {
    category: wrapPromise(getCategory(id, page)),
    upcoming: wrapPromise(getUpcoming()),
    nowPlaying: wrapPromise(getNowPlaying()),
  };
};
