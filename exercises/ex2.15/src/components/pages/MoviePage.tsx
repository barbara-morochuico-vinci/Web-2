import { useMatch, useOutletContext } from "react-router-dom";
import MovieCard from "../MovieCard";
import { MovieContext } from "../../types";

const MoviePage = () => {
    const { movies }: MovieContext = useOutletContext()
    const match = useMatch("/movies/:id");
  const id = match?.params.id;
  if (!id) return <p>Movie not found</p>;

  const movie = movies.find((movie) => movie.id.toString() === id);
  if (!movie) return <p>User not found</p>;
    return (
        <div>
            <MovieCard key={movie.id} movie={movie} />
        </div>
    );
};

export default MoviePage;