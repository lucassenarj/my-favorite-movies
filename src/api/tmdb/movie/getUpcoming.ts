import apiInstance from "./../instance";

const API_KEY = process.env.REACT_APP_API_KEY;

const getUpcoming = () => {
  return apiInstance.get(`/movie/upcoming?api_key=${API_KEY}`);
}

export default getUpcoming;
