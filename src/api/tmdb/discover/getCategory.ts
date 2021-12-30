import apiInstance from "./../instance";

const API_KEY = process.env.REACT_APP_API_KEY;

const getCategory = (id: number, page: number = 1) => {
  return apiInstance.get(`/discover/movie?with_genres=${id}&page=${page}&api_key=${API_KEY}`);
}

export default getCategory;