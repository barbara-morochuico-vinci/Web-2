import { useState } from "react";
import Movie from "../../types";

  const MovieItem = ({title, director, description} : Movie) => {
    const [descriptionShown, setDescriptionShown] = useState(false);

    return <li onClick={() => setDescriptionShown(!descriptionShown)}> {title} - Réalisateur : {director} {descriptionShown ? description : null}</li>;
  }

  export default MovieItem;