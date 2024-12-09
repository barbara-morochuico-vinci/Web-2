import { Request } from "express";

interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

interface Film {
  id: number;
  title : string;
  director: string;
  duration : number;
  budget? : number;
  description? : string;
  imageUrl? : string; 
}

type NewFilm = Omit<Film, "id">;

interface AuthenticatedUser {
  username: string;
  token: string;
}

interface User {
  id: number;
  username: string;
  password: string;
}
type PotentialUser = Omit<User, "id">;

interface AuthenticatedRequest extends Request {
  user?: User;
}

interface JwtPayload {
  username: string;
  exp: number; // Expiration time (in seconds since the epoch)
  iat: number; // Issued at time (in seconds since the epoch)
}

export type { Pizza, NewPizza, PizzaToUpdate, Drink, Film, NewFilm, AuthenticatedUser, User, PotentialUser, AuthenticatedRequest, JwtPayload };
