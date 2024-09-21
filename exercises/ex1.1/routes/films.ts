import { Router } from "express";
import { Film } from "../types";

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

const router = Router();

router.get("/", (_req, res) => {
  return res.json(films);
});

export default router;
