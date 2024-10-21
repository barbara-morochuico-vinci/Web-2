interface Movie {
    id: number,
    title: string;
    director: string;
  }
  
  interface CinemaProps {
    name: string;
    movies: Movie[];
  }
  
  const Cinema = (props: CinemaProps) => {
    return (
      <div>
        <h2>{props.name}</h2>
  
      <ul>
        {props.movies.map((movie) => (
              <li key = {movie.id}>{movie.title} - Réalisateur : {movie.director}</li>
          ))}
      </ul>
      </div>
    );
  };

  export default Cinema;