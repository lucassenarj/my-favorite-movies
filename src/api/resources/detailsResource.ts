import getDetails from "../tmdb/movie/getDetails";
import getRecommendations from "../tmdb/movie/getRecommendations";
import getReviews from "../tmdb/movie/getReviews";
import { wrapPromise } from "./../";


export const createDetailsResource = (id: number) => {
  return {
    details: wrapPromise(getDetails(id)),
    reviews: wrapPromise(getReviews(id)),
    recommendations: wrapPromise(getRecommendations(id)),
  }
}