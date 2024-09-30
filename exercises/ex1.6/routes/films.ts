import { Router } from "express";
import { Film, NewFilm } from "../types";

const router = Router();

const films: Film[] = [
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



router.get("/", (req, res) => {
  if (!req.query['minimum-duration']) {
    return res.json(films);
  }
  const minDuration = Number(req.query['minimum-duration']);
  const filteredFilms = films.filter((film) => {
    return film.duration >= minDuration;
  });
  return res.json(filteredFilms);
});


router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" || 
    ("budget" in body && 
      (typeof body.budget !=="number" || body.budget<=0)) ||
    ("description" in body && 
      (typeof body.description !=="string" || !body.description.trim())) ||
    ("imageUrl" in body && 
      (typeof body.imageUrl !=="string" || !body.imageUrl.trim())) ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0
  ) {
    return res.sendStatus(400);
  }
  
  films.forEach(film => {
    if(film.title===body.title && film.director===body.director ){
      return res.sendStatus(409);
    }
    else {
      return null;
    }
  });

  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

  const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
    1;

  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description, 
    imageUrl
  };

  const existingFilm = films.find(
    (film) =>
      film.title.toLowerCase() === newFilm.title.toLowerCase() &&
      film.director.toLowerCase() === newFilm.director.toLowerCase()
  );

  if (existingFilm) {
    return res.sendStatus(409);
  }

  films.push(newFilm);
  return res.json(newFilm);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = films.splice(index, 1); // splice() returns an array of the deleted elements
  return res.json(deletedElements[0]);
});

router.patch("/:id", (req,res) => {
  const id =Number(req.params.id);
  const film = films.find((film) => film.id ===id);
  if(!film){
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  if(!body || 
    typeof body !== "object" ||
    ("title" in body && 
      (typeof body.title !=="string" || !body.title.trim())) ||
    ("director" in body && 
      (typeof body.director !=="string" || !body.director.trim())) ||
    ("duration" in body && 
      (typeof body.duration !=="number" || body.duration <=0)) ||  
    ("budget" in body && 
      (typeof body.budget !=="number" || body.budget <=0)) ||
    ("description" in body && 
        (typeof body.description !=="string" || !body.description.trim())) ||
    ("imageUrl" in body && 
        (typeof body.imageUrl !=="string" || !body.imageUrl.trim()))      
  ){
    return res.sendStatus(400);
  }

  const {title, director, duration, budget, description, imageUrl}: Partial<NewFilm> = body;
  if(title){
    film.title=title;
  }
  if(director){
    film.director=director;
  }
  if(duration){
    film.duration=duration;
  }
  if(budget){
    film.budget=budget;
  }
  if(description){
    film.description=description;
  }
  if(imageUrl){
    film.imageUrl=imageUrl;
  }

  return res.json(film);
});

router.put("/:id", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" || 
    ("budget" in body && 
      (typeof body.budget !=="number" || body.budget<=0)) ||
    ("description" in body && 
      (typeof body.description !=="string" || !body.description.trim())) ||
    ("imageUrl" in body && 
      (typeof body.imageUrl !=="string" || !body.imageUrl.trim())) ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0
  ) {
    return res.sendStatus(400);
  }
  const id =Number(req.params.id);
  const film = films.find((film) => film.id ===id);
  const {title, director, duration, budget, description, imageUrl} = body as NewFilm;

  if(film){
    if(title){
      film.title=title;
    }
    if(director){
      film.director=director;
    }
    if(duration){
      film.duration=duration;
    }
    if(budget){
      film.budget=budget;
    }
    if(description){
      film.description=description;
    }
    if(imageUrl){
      film.imageUrl=imageUrl;
    }

    return res.json(film);
  }
  else {

  const newFilm: Film = {
    id: id,
    title,
    director,
    duration,
    budget,
    description, 
    imageUrl
  };
  films.push(newFilm);
  return res.json(newFilm);
  }

});

export default router;
