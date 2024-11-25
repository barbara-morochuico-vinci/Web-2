import { useOutletContext } from "react-router-dom";
import MovieTitles from "../MovieTitles";
import PageTitle from "../PageTitle";
import { MovieContext } from "../../types";

const HomePage = () => {
  const { movies }: MovieContext = useOutletContext()
  return (
    <div>
      <PageTitle title="myMovies" />
      <p>Welcome to myMovies, a site where you can find info about cinemas, movies...</p>
      <MovieTitles movies={movies} />
    </div>
  );
};
export default HomePage;