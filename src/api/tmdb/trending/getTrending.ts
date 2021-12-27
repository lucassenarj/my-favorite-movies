import apiInstance from "./../instance";

const API_KEY = process.env.REACT_APP_API_KEY;

const getTrending = () => {
  return apiInstance.get(`/trending/movie/week?api_key=${API_KEY}`);
}

export default getTrending;