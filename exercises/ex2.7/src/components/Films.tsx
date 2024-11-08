import {Film} from '../types.ts'

interface FilmProps {
    films : Film[];
}

const Films = ({films} : FilmProps) => {
    return <div>
        <ul>
            {films.map((film) => (
                <li> Titre : {film.title}, Directeur : {film.director}, Durée : {film.duration}
                {film.image_url ? <img src={film.image_url} alt="image film"></img> : null}
                {film.description ? <p>Description : {film.description}</p> : null}
                {film.budget ? <p> Budget : {film.budget}</p> : null}
                </li>
            ))}
        </ul>
    </div>;
}

export default Films;