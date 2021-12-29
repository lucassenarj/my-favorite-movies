import apiInstance from "./../instance";

const API_KEY = process.env.REACT_APP_API_KEY;

const getReviews = (id: number) => {
  return apiInstance.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
}

export default getReviews;
