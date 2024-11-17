import MovieItem from "./Movie";
import { Movie } from "../types";


  interface CinemaProps {
    name: string;
    movies: Movie[];
  }
  
  const Cinema = ({name, movies}: CinemaProps) => {
    return (
      <div>
        <h2>{name}</h2>
  
      <ul>
        {movies.map((movie) => (
              <MovieItem title={movie.title} 
              description={movie.description}
              director={movie.director}/>
          ))}
      </ul>
      </div>
    );
  };

  export default Cinema;