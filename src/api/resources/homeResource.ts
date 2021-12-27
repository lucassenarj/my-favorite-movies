import { wrapPromise } from "./../";
import getDocumentaries from "../tmdb/discover/getDocumentaries";
import getLatest from "../tmdb/movie/getLatest";
import getNowPlaying from "../tmdb/movie/getNowPlaying";
import getTopRated from "../tmdb/movie/getTopRated";
import getUpcoming from "../tmdb/movie/getUpcoming";
import getTrending from "../tmdb/trending/getTrending";

export const createHomePageResource = () => {
  return {
    latest: wrapPromise(getLatest()),
    trending: wrapPromise(getTrending()),
    topRated: wrapPromise(getTopRated()),
    documentaries: wrapPromise(getDocumentaries()),
    upcoming: wrapPromise(getUpcoming()),
    nowPlaying: wrapPromise(getNowPlaying()),
  }
}