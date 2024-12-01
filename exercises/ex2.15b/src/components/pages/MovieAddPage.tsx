import AddMovieForm from "../AddMovieForm";
import { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";


const MovieAddPage = () => {
    const { onMovieAdded }: MovieContext = useOutletContext();
    return (
        <div>
            <AddMovieForm onMovieAdded={onMovieAdded} />
            <br />
            <br />
            <br />
            <br />
      </div>
    );
}

export default MovieAddPage;