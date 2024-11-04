import { useState } from "react";

interface MovieProps {
    title: string;
    director: string,
    description : string;
}

  const Movie = ({title, director, description} : MovieProps) => {
    const [descriptionShown, setDescriptionShown] = useState(false);

    return <li onClick={() => setDescriptionShown(!descriptionShown)}> {title} - Réalisateur : {director} {descriptionShown ? description : null}</li>;
  }

  export default Movie;