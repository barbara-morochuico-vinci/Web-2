import path from "node:path";

import { Text, NewText } from "../types";

import { serialize, parse } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/texts.json");

const defaultTexts: Text[] = [
  {
    id: 1,
    content: "Test text",
    level: "easy"
  }
];

const readAll = (level: string | undefined = undefined): Text[] => {
  const texts = parse(jsonDbPath, defaultTexts);
  return level
    ? texts.filter((text) => text.level===level)
    : texts;
};

const readOne = (id: number): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);
  return texts.find((text) => text.id === id);
};

const createOne = (newText: NewText): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  const existingText = texts.find(
    (text) =>
        text.content.toLowerCase() === newText.content.toLowerCase() &&
        text.level.toLowerCase() === newText.level.toLowerCase()
  );

  if (existingText) {
    return undefined;
  }

  const text = { id: nextId(), ...newText };

  texts.push(text);
  serialize(jsonDbPath, texts);

  return text;
};

const deleteOne = (id: number): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  const index = texts.findIndex((text) => text.id === id);

  if (index === -1) {
    return undefined;
  }

  const [text] = texts.splice(index, 1);
  serialize(jsonDbPath, texts);

  return text;
};

const updateOrCreateOne = (
  id: number,
  updatedText: NewText
): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  const index = texts.findIndex((text) => text.id === id);

  if (index === -1) {
    return createOne(updatedText);
  }

  const text = { ...texts[index], ...updatedText };

  texts[index] = text;
  serialize(jsonDbPath, texts);

  return text;
};

const nextId = () =>
  parse(jsonDbPath, defaultTexts).reduce(
    (maxId, text) => Math.max(maxId, text.id),
    0
  ) + 1;

export { readAll, readOne, createOne, deleteOne, updateOrCreateOne };