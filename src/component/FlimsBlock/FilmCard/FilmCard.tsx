import {MovieDocument} from "../../../api/apiKinopoisk.ts";
import {FC} from "react";
import "./filmCard.scss"


type PropsType = {
    film: MovieDocument
}



export const FilmCard: FC<PropsType> = ({film}) => {
    const genreFilms = film.genres.map((genre, index)=> {
      return (
          index !== film.genres.length -1
              ? <span>{genre.name + ", "}</span>
              : <span>{genre.name}</span>

      )
    })

    return (
        <div className="card">
            <div className = "imgBlock">
                {film.poster.url ? <img src={film.poster.url}/> :  <img src={film.poster.url}/>}
                <div>{film.name}</div>
                <div>{genreFilms}</div>
            </div>
        </div>
    );
};

