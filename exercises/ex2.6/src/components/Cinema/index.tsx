import Movie from "../Movie";

interface Movie {
  title: string;
  director: string,
  description : string;
}

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
              <Movie title={movie.title} 
              description={movie.description}
              director={movie.director}/>
          ))}
      </ul>
      </div>
    );
  };

  export default Cinema;