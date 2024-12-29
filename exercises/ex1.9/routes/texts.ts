import { Router } from "express";

import {
  createOne,
  deleteOne,
  readAll,
  readOne,
  updateOrCreateOne,
} from "../services/texts";
import { NewText } from "../types";

const router = Router();

// Read all texts, filtered by level if the query param exists
router.get("/", (req, res) => {
  const level =
    "level" in req.query
      ? String(req.query["level"])
      : undefined;

  if (level !== undefined && level.trim() !== "easy" && level.trim() !== "medium" && level.trim() !== "hard") {
    return res.sendStatus(400);
  }

  const filteredTexts = readAll(level);

  return res.send(filteredTexts);
});

// Read a text by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const text = readOne(id);

  if (text === undefined) {
    return res.sendStatus(404);
  }

  return res.send(text);
});

// Create a new text
router.post("/", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("content" in body) ||
    !("level" in body) ||
    typeof body.content !== "string" ||
    typeof body.level !== "string" ||
    !body.content.trim() ||
    !body.level.trim() || (body.level.trim() !== "easy" && body.level.trim() !== "medium" && body.level.trim() !== "hard")
  ) {
    return res.sendStatus(400);
  }

  const newText = body as NewText;

  const addedText = createOne(newText);

  if (!addedText) {
    return res.sendStatus(409);
  }

  return res.json(addedText);
});

// Delete a text by id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const deletedText = deleteOne(id);

  if (!deletedText) {
    return res.sendStatus(404);
  }

  return res.send(deletedText);
});

// Update a text only if all properties are given or create it if it does not exist and the id is not existant
router.put("/:id", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("content" in body) ||
    !("level" in body) ||
    typeof body.content !== "string" ||
    typeof body.level !== "string" ||
    !body.content.trim() ||
    !body.level.trim() || (body.level.trim() !== "easy" && body.level.trim() !== "medium" && body.level.trim() !== "hard")
  ) {
    return res.sendStatus(400);
  }
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const createdOrUpdatedText = updateOrCreateOne(id, body as NewText);

  if (!createdOrUpdatedText) {
    return res.sendStatus(409); // text already exists
  }

  return res.send(createdOrUpdatedText);
});

export default router;