import { Router } from "express";
import { Comment } from "../types";
import { readAllComments, createOneComment, deleteOneComment } from "../services/comments";
import { authorize } from "../utils/auths";

const router = Router();

router.get("/", (req, res) => {
  const filmId = Number(req.query['filmId']);
  const comments = readAllComments(filmId);
  return res.json(comments);
});

router.post("/", authorize, (req, res) => {
    const body: unknown = req.body;
    if (!body || typeof body !== "object" || !("filmId" in body) ||
     !("comment" in body) || typeof body.filmId !== "number" || 
     typeof body.comment !== "string" || !body.comment.trim() ||
      body.filmId < 0 || !("user" in req) ||
    typeof req.user !== "object" ||
    !req.user || !("username" in req.user) ||
    typeof req.user.username !== "string") {
        return res.sendStatus(400);
    }
    const newComment: Comment = {
        comment: body.comment,
        filmId: body.filmId,
        username: req.user.username,
      };

      try {
        createOneComment(newComment);
        return res.send(newComment);
      } catch (error) {
        if (!(error instanceof Error)) {
          return res.sendStatus(500);
        }
    
        if (error.message === "Not found") {
          return res.sendStatus(404);
        }
    
        if (error.message === "Conflict") {
          return res.sendStatus(409);
        }
    
        return res.sendStatus(500);
      }
});

router.delete("/:id", authorize, (req, res) => {
    const filmId = Number(req.params.filmId);

    if (
        isNaN(filmId) ||
        filmId <= 0 ||
        !("user" in req) ||
        typeof req.user !== "object" ||
        !req.user ||
        !("username" in req.user) ||
        typeof req.user.username !== "string"
      ) {
        return res.sendStatus(400);
      }

      const username = req.user.username;
      try {
        const deletedComment = deleteOneComment(filmId, username);
        return res.json(deletedComment);
      } catch (error) {
        if (!(error instanceof Error)) {
          return res.sendStatus(500);
        }
    
        if (error.message === "Not found") {
          return res.sendStatus(404);
        }

        return res.sendStatus(500);
      }
    
});

export default router;