import apiInstance from "./../instance";

const API_KEY = process.env.REACT_APP_API_KEY;

const getNowPlaying = () => {
  return apiInstance.get(`/movie/now_playing?api_key=${API_KEY}`);
}

export default getNowPlaying;
