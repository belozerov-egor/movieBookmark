import {useAppDispatch, useAppSelector} from "../../hook/hooks.ts";
import {kinopoiskThunks} from "../../reducer/kinopoisk.ts";
import "../FlimsBlock/filmBlock.scss"
import {useEffect} from "react";
import {SeriesCard} from "./Series/SeriesCard.tsx";



export const SeriesBlock = () => {

    const dispatch = useAppDispatch()
    const cartoons = useAppSelector(state=> state.films.series)


    useEffect( ()=> {
        dispatch(kinopoiskThunks.getTopSeries())
    },[])

    const filmsMap = cartoons.map(el=> {
        return (
            <SeriesCard key={el.id} film={el}/>
        )
    })
    return (
        <div className="filmBlock">
            {filmsMap}
        </div>
    );
};

