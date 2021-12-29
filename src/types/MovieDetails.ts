import Genre from "./Genre";
import ProductionCompanies from "./ProductionCompanies";
import ProductionCountries from "./ProductionCountries";
import SpokenLanguages from "./SpokenLanguages";

type MovieDetails = {
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection?: object;
  budget: number;
  genres: Genre[];
  homepage?: string;
  id: number;
  imdb_id?: number;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime?: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default MovieDetails;