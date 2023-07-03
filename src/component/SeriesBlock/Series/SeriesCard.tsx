import {MovieDocument} from "../../../api/apiKinopoisk.ts";
import {FC} from "react";
import "../../FlimsBlock/FilmCard/filmCard.scss"
import { useAppDispatch } from "../../../hook/hooks.ts";
import { movieThunks } from "../../../reducer/movieReducer.ts";
import { useNavigate } from "react-router-dom";


type PropsType = {
    film: MovieDocument
}



export const SeriesCard: FC<PropsType> = ({film}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const genreFilms = film.genres.map((genre, index)=> {
      return (
          index !== film.genres.length -1
              ? <span key={index}>{genre.name + ", "}</span>
              : <span key={index}>{genre.name}</span>

      )
    })

    const aboutFilm = ()=> {
        dispatch(movieThunks.getFilm({movieId: film.id}))
        navigate('/film')
    }

    return (
        <div className="card">
            <div className = "imgBlock">
                {film.poster.url ? <img onClick={aboutFilm} src={film.poster.url}/> :  <img src={film.poster.url}/>}
                <div>{film.name}</div>
                <div>{genreFilms}</div>
            </div>
        </div>
    );
};

