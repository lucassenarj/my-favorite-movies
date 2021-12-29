import apiInstance from "./../instance";

const API_KEY = process.env.REACT_APP_API_KEY;

const getDetails = (id: number) => {
  return apiInstance.get(`/movie/${id}?api_key=${API_KEY}`);
}

export default getDetails;
