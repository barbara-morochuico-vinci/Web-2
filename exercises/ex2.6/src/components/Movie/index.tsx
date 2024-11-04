import { useState } from "react";

interface MovieItemProps {
    title: string;
    director: string,
    description : string;
}

  const MovieItem = ({title, director, description} : MovieItemProps) => {
    const [descriptionShown, setDescriptionShown] = useState(false);

    return <li onClick={() => setDescriptionShown(!descriptionShown)}> {title} - Réalisateur : {director} {descriptionShown ? description : null}</li>;
  }

  export default MovieItem;