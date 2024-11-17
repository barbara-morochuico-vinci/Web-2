
import './App.css'
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigate } from "react-router-dom";
import AddMovieForm from './AddMovieForm';
import Cinema from './Cinema';
import PageTitle from './PageTitle';


const pageTitle = "Informations sur les films dans les cinémas";

const cinema1Name = "UGC De Brouckère";

const moviesCinema1 = [
  {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
    description:
      "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
  },
  {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
    description:
      "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
  },
  {
    title: "INCEPTION",
    director: "Christopher Nolan",
    description:
      "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
  },
  {
    title: "PARASITE",
    director: "Bong Joon-ho",
    description:
      "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
  },
];

const cinema2Name = "UGC Toison d'Or";

const moviesCinema2 = [
  {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
    description:
      "A suspenseful thriller that follows a group of people who are under constant surveillance, leading them to uncover dark secrets about their observers and themselves.",
  },
  {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
    description:
      "The latest installment in the action-packed Bad Boys franchise, featuring detectives Mike Lowrey and Marcus Burnett as they take on their most dangerous case yet.",
  },
  {
    title: "TENET",
    director: "Christopher Nolan",
    description:
      "A complex and visually stunning sci-fi action film where a protagonist embarks on a time-bending mission to prevent World War III, navigating through a world of temporal inversion.",
  },
  {
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
    description:
      "An epic crime drama that chronicles the life of Frank Sheeran, a mob hitman, as he reflects on his involvement with the Bufalino crime family and the mysterious disappearance of his friend, Jimmy Hoffa.",
  },
];
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
const MovieListPage = () => <div> <h2>Mes films</h2> <AddMovieForm></AddMovieForm></div>;
const CinemaPage = () => <div> <PageTitle title={pageTitle} />
<Cinema name={cinema1Name} movies={moviesCinema1} />

<Cinema name={cinema2Name} movies={moviesCinema2}/> </div>;



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