import apiInstance from "./../instance";

const API_KEY = process.env.REACT_APP_API_KEY;

const getTopRated = () => {
  return apiInstance.get(`/movie/top_rated?api_key=${API_KEY}`);
}

export default getTopRated;
