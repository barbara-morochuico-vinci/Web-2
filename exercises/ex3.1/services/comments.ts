import path from "node:path";
import type { Comment } from "../types";
import { parse, serialize } from "../utils/json";
import { readOneFilm } from "./films";
const jsonDbPath = path.join(__dirname, "/../data/comments.json");

const defaultComments: Comment[] = [
    {
      comment: "Ponyo is cute",
      filmId: 1,
      username: "COOLGUY",
    }
  ];

  function readAllComments(filmId: number): Comment[] {
    const comments = parse(jsonDbPath, defaultComments);
    if (!filmId) {
      return comments;
    }
  
    const filmIdNumber = Number(filmId);
  
    const filteredComments = comments.filter((comment) => {
      return  comment.filmId === filmIdNumber;
    });
    return filteredComments;
  }


  function createOneComment(comment: Comment): void {
    const comments = parse(jsonDbPath, defaultComments);

    const filmFound = readOneFilm(comment.filmId);
    if(!filmFound){
      throw new Error("Not found");
    }
   // Check that the username has not already commented on the film
  const userHasCommented = comments.some(
    (c) => c.filmId === comment.filmId && c.username === comment.username
  );

  if (userHasCommented) {
    throw new Error("Conflict");
  }

  comments.push(comment);
  serialize(jsonDbPath, comments);
  }


  
  function deleteOneComment(filmId: number, username: string): Comment | undefined {
    const comments = parse(jsonDbPath, defaultComments);
    const index = comments.findIndex((comment) => comment.filmId === filmId && comment.username === username);
    if (index === -1) {
      throw new Error("Not found");
    }
  
    const deletedElements = comments.splice(index, 1);
    serialize(jsonDbPath, comments);
    return deletedElements[0];
  }
  
  export {
    readAllComments,
    createOneComment,
    deleteOneComment,
  };