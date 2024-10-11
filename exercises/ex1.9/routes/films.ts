import { Router } from "express";
import { NewFilm } from "../types";
import {
  createOneFilm,
  deleteOneFilm,
  readAllFilms,
  readOneFilm,
  updateOneFilm,
} from "../services/films";

const router = Router();



router.get("/", (req, res) => {
  const minDuration = Number(req.query['minimum-duration']);
  const films = readAllFilms(minDuration);
  return res.json(films);
});


router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = readOneFilm(id);
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

  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

  const newFilm = createOneFilm({title, director, duration, budget, description, imageUrl});
  if(newFilm===undefined){
    return res.sendStatus(409);
  }
  return res.json(newFilm);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const deletedFilm = deleteOneFilm(id);
  if (!deletedFilm) {
    return res.sendStatus(404);
  }
  return res.json(deletedFilm);
});

router.patch("/:id", (req,res) => {
  const id =Number(req.params.id);
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
  const updatedFilm = updateOneFilm(id, { title, director, duration, budget, description, imageUrl });

  if (!updatedFilm) {
    return res.sendStatus(404);
  }

  return res.json(updatedFilm);
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
  const {title, director, duration, budget, description, imageUrl} = body as NewFilm;
  const existingFilm = updateOneFilm(id, { title, director, duration, budget, description, imageUrl });

  if(existingFilm){
    return res.json(existingFilm);
  }
  else {

  const newFilm = createOneFilm({title, director, duration, budget, description, imageUrl});
  return res.json(newFilm);
  }

});

export default router;
