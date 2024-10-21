import Cinema from "../Cinema";
import Footer from "../Footer";
import Header from "../Header";
import PageTitle from "../PageTitle";

const App = () => {
  const imageHeader = "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2luZW1hfGVufDB8fDB8fHww";
  const imageFooter = "https://plus.unsplash.com/premium_photo-1667425092311-80658bb0c05f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
    {
      id: 1,
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      id: 2,
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      id: 3,
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      id: 4,
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";
  const moviesCinema2 = [
  {
    id: 5,
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
  {
    id: 6,
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    id: 7,
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    id: 8,
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
  },
]; 

  return (
    <div>
      <Header url_image={imageHeader} children={undefined} />

      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies={moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2}/>

      <Footer url_image={imageFooter} children={undefined} />
    </div>
  );
};

export default App;
