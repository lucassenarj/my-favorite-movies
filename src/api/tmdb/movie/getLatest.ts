import apiInstance from "./../instance";

const API_KEY = process.env.REACT_APP_API_KEY;

const getLatest = () => {
  return apiInstance.get(`/movie/popular?api_key=${API_KEY}`);
}

export default getLatest;
