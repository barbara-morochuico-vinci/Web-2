
import './App.css'
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigate } from "react-router-dom";
import AddMovieForm from './AddMovieForm';

//c'est pas beau mais c'est fonctionnel
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinema")}>Cinema</button>
      <button onClick={() => navigate("/movielist")}>Movie List</button>
    </nav>
  );
};

const HomePage = () => <div><h3>Explication IMovie </h3> <p> blalbalblablbllblblba</p></div>;
const MovieListPage = () => <div> <h2>Movie List Page</h2> <AddMovieForm></AddMovieForm></div>;
const CinemaPage = () => <div>Cinema Page <p>insérer le contenu de l'exo 2.6 avec les cinémas (trkl)</p></div>;



function App() {
  const imageHeader = "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2luZW1hfGVufDB8fDB8fHww";
  const imageFooter = "https://plus.unsplash.com/premium_photo-1667425092311-80658bb0c05f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
    <Header url_image={imageHeader} children={undefined} />
    <NavBar />
    <Outlet />
      <Footer url_image={imageFooter} children={undefined} />    </>
  )
}

export default App
export { HomePage, CinemaPage, MovieListPage };