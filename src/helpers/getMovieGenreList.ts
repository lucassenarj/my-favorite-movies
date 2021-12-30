import Genre from "../types/Genre";
import genresList from "./genresList";

function getMovieGenreList(ids: number[]) {
  const genres: Genre[] = [];
  ids.forEach((id) => {
    const founded = genresList.find((genre) => id === genre.id);
    if(founded) genres.push(founded);
  });

  return genres;
};

export default getMovieGenreList;
