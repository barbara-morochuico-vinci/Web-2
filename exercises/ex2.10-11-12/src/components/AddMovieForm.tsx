import { SyntheticEvent, useState } from "react";
import Films from "./Films";

const defaultFilms = [
    {
      title : "Ponyo",
      director: "Miyazaki le goat",
      duration : 103
    },
    {
      title : "My Film",
      director : "Jelly-the-Witch",
      duration : 150
    },
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      duration : 3
    },
    {
      title: "INCEPTION",
        director: "Christopher Nolan",
      duration : 4
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
      duration : 5
    },
  
  ]
const AddMovieForm = () => {
  
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [image_url, setImage_url] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [films, setFilms] = useState(defaultFilms);

  const handleSubmit = (e: SyntheticEvent) => {

    e.preventDefault();
    console.log("submit:", title, director, duration, image_url, budget);
    const newFilm = {
      title: title,
      director: director,
      duration : duration,
      image_url : image_url,
      description : description,
      budget : budget
    };
    setFilms([...films, newFilm]);
  };

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    console.log("change in titleInput:", titleInput.value);
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log("change in directorInput:", directorInput.value);
    setDirector(directorInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    console.log("change in durationInput:", durationInput.value);
    setDuration(parseInt(durationInput.value));
  };

  const handleImageUrlChange = (e: SyntheticEvent) => {
    const imageUrlInput = e.target as HTMLInputElement;
    console.log("change in imageUrlInput:", imageUrlInput.value);
    setImage_url(imageUrlInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log("change in budgetInput:", budgetInput.value);
    setBudget(parseInt(budgetInput.value));
  };

  return (
    <>
    <Films films={films} />
      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Titre du film</label>
          <input
            value={title}
            type="text"
            id="title"
            name="title"
            onChange={handleTitleChange}
            required
          />
          <label htmlFor="director">Directeur</label>
          <input
            value={director}
            type="text"
            id="director"
            name="director"
            onChange={handleDirectorChange}
            required
          />
          <label htmlFor="duration">Durée</label>
          <input
            value={duration}
            type="text"
            id="duration"
            name="duration"
            onChange={handleDurationChange}
            required
          />
          <label htmlFor="image_url">Url de l'image</label>
          <input
            value={image_url}
            type="text"
            id="image_url"
            name="image_url"
            onChange={handleImageUrlChange}
          />
          <label htmlFor="description">Description</label>
          <input
            value={description}
            type="text"
            id="description"
            name="description"
            onChange={handleDescriptionChange}
          />
          <label htmlFor="budget">Budget</label>
          <input
            value={budget}
            type="text"
            id="budget"
            name="budget"
            onChange={handleBudgetChange}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
  );
  </>
)};

export default AddMovieForm;