import apiInstance from "./../instance";

const API_KEY = process.env.REACT_APP_API_KEY;

const getDocumentaries = () => {
  return apiInstance.get(`/discover/movie?with_genres=99&api_key=${API_KEY}`);
}

export default getDocumentaries;