import { useState, useEffect } from 'react';
import './App.css'

interface Joke {
  joke: string;
  category: string;
}

function App() {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=sexist&type=single")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJoke({
          joke: data.joke ?? "No joke found",
          category: data.category ?? "Unknown",
        });
      });
  }, []);

  if (!joke) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <h1>Here is a funny joke</h1>    
    <h2>{joke.category}</h2>
    <h3>{joke.joke}</h3>
    </>
  )
}

export default App
