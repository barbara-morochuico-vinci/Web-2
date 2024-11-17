import path from "node:path";
import { Film, NewFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
    {
      id: 1,
      title: "Ponyo sur la falaise",
      director : "Hayao Miyazaki",
      duration : 103,
      imageUrl:
        "https://www.google.com/imgres?q=ponyo&imgurl=https%3A%2F%2Fgaleries.be%2Fwp-content%2Fuploads%2F2024%2F05%2Fponyo-sur-la-falaise-miyazaki.jpg&imgrefurl=https%3A%2F%2Fgaleries.be%2Ffr%2Flheure-dete-jeune-public-ponyo-sur-la-falaise%2F&docid=xRzRpLvU9HpaFM&tbnid=VAvJIpZ7GXoTKM&vet=12ahUKEwi6kMrNg9SIAxVC1QIHHTa1M90QM3oECBwQAA..i&w=1200&h=675&hcb=2&ved=2ahUKEwi6kMrNg9SIAxVC1QIHHTa1M90QM3oECBwQAA",
    },
    {
      id: 2,
      title: "Suzume",
      director :"Makoto Shinkai",
      duration : 122,
    },
    {
      id: 3,
      title: "Le menu",
      director:"Mark Mylod", 
      duration: 106
    }
  ];

  function readAllFilms(minDuration: number): Film[] {
    const films = parse(jsonDbPath, defaultFilms);
    if (!minDuration) {
      return films;
    }
  
    const minDurationNumber = Number(minDuration);
  
    const filteredFilms = films.filter((film) => {
      return film.duration >= minDurationNumber;
    });
    return filteredFilms;
  }

  function readOneFilm(id: number): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id === id);
    if (!film) {
      return undefined;
    }
    return film;
  }

  function createOneFilm(NewFilm: NewFilm): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);

    const nextId =
      films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
      1;
  
  
    const createdFilm = {
      id: nextId,
      ...NewFilm,
    };
  
    const existingFilm = films.find(
        (film) =>
          film.title.toLowerCase() === createdFilm.title.toLowerCase() &&
          film.director.toLowerCase() === createdFilm.director.toLowerCase()
      );
    
      if (existingFilm) {
        return undefined;
      }

    films.push(createdFilm);
    serialize(jsonDbPath, films);
  
    return createdFilm;
  }

  function deleteOneFilm(filmId: number): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const index = films.findIndex((film) => film.id === filmId);
    if (index === -1) {
      return undefined;
    }
  
    const deletedElements = films.splice(index, 1);
    serialize(jsonDbPath, films);
    return deletedElements[0];
  }
  
  function updateOneFilm(
    filmId: number,
    newFilm: Partial<NewFilm>
  ): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id === filmId);
    if (!film) {
      return undefined;
    }
  
    if (newFilm.title !== undefined) {
      film.title = newFilm.title!; // the router already checks for the presence of title
    }
    if (newFilm.director !== undefined) {
      film.director = newFilm.director!;
    }
    if (newFilm.duration !== undefined) {
      film.duration = newFilm.duration!;
    }
    if (newFilm.budget !== undefined) {
        film.budget = newFilm.budget!;
    }
    if (newFilm.description !== undefined) {
        film.description = newFilm.description!;
    }
    if (newFilm.imageUrl !== undefined) {
        film.imageUrl = newFilm.imageUrl!;
    }
  
    serialize(jsonDbPath, films);
    return film;
  }
  
  export {
    readAllFilms,
    readOneFilm,
    createOneFilm,
    deleteOneFilm,
    updateOneFilm,
  };