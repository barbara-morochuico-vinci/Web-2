import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./Navbar";
import { useEffect, useState } from "react";
import { Movie, MovieContext, NewMovie } from "../types";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const initMovies = async () => {
    try {
      const movies = await fetchMovies();
      setMovies(movies);
    } catch(error){
      console.error(error);
    }
  };

  useEffect(() => {
    initMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const reponse = await fetch("/api/films");
      if(!reponse.ok){
        throw new Error("Failed to fetch movies : " + reponse.statusText);
      }
      const data = await reponse.json();
      return data;
    }catch (error) {
      console.error(error);
      throw error;
    }
  }

  const onMovieDeleted = async (movie: Movie) => {
    console.log("Movie to delete:", movie);
    try{
      await deleteMovie(movie);
      console.log("Movie deleted:",movie);
      await initMovies();
    } catch (error){
      console.error(error);
    }
  };

  const deleteMovie = async (movie: Movie): Promise<void> => {
    try {
      const response = await fetch(`/api/films/${movie.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete movie : " + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const onMovieAdded = async (newMovie: NewMovie) => {
    console.log("Movie to add:", newMovie);
    try{
      const movieToBeAdded = await addMovie(newMovie);
      console.log("Movie added:",movieToBeAdded);
      await initMovies();
      navigate("/movie-list");
    } catch (error){
      console.error(error);
    }
  };

  const addMovie = async (movie: NewMovie): Promise<Movie> => {
    try {
      const response = await fetch("/api/films", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });
      if (!response.ok) {
        throw new Error("Failed to add movie : " + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const movieContext: MovieContext = {
    movies,
    onMovieAdded,
    onMovieDeleted
  };

  return (
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Tous sur les films</h1>
        <NavBar />
      </Header>

      <main className="page-content">
        <Outlet context={movieContext}/>
      </main>

      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© myMovies</p>
      </Footer>
    </div>
  );
};

export default App;