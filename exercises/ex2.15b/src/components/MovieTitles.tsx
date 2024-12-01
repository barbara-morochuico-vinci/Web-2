import { Link } from "react-router-dom";
import { Movie } from "../types";

interface MovieTitlesProps {
    movies: Movie[];
  }

  const MovieTitles = ({ movies }: MovieTitlesProps) => {
    return (
      <div >
        <ul className="movie-titles">
         {movies.map((movie) => (
         <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>{" "}
         </li>
        ))}
        </ul>
      </div>
    );
  };
  
  export default MovieTitles;