import {useAppDispatch, useAppSelector} from "../../hook/hooks.ts";
import {kinopoiskThunks} from "../../reducer/kinopoisk.ts";
import "./filmBlock.scss"
import {useEffect} from "react";
import {FilmCard} from "./FilmCard/FilmCard.tsx";


export const FilmsBlock = () => {

    const dispatch = useAppDispatch()
    const films = useAppSelector(state=> state.films)


    useEffect( ()=> {
        dispatch(kinopoiskThunks.getFilm())
    },[])

    const filmsMap = films.map(el=> {
        return (
            <FilmCard key={el.id} film={el}/>
        )
    })
    return (
        <div className="filmBlock">
            {filmsMap}
        </div>
    );
};

