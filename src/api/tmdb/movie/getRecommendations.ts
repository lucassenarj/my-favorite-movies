import apiInstance from "./../instance";

const API_KEY = process.env.REACT_APP_API_KEY;

const getRecommendations = (id: number) => {
  return apiInstance.get(`/movie/${id}/recommendations?api_key=${API_KEY}`);
}

export default getRecommendations;
