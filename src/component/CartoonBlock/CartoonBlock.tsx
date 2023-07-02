import {useAppDispatch, useAppSelector} from "../../hook/hooks.ts";
import {kinopoiskThunks} from "../../reducer/kinopoisk.ts";
import "../FlimsBlock/filmBlock.scss"
import {useEffect} from "react";
import {CartoonCard} from "./Cartoon/CartoonCard.tsx";



export const CartoonBlock = () => {

    const dispatch = useAppDispatch()
    const films = useAppSelector(state=> state.films.films)


    useEffect( ()=> {
        dispatch(kinopoiskThunks.getTopCartoon())
    },[])

    const filmsMap = films.map(el=> {
        return (
            <CartoonCard key={el.id} film={el}/>
        )
    })
    return (
        <div className="filmBlock">
            {filmsMap}
        </div>
    );
};

