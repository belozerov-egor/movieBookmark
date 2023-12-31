import {useAppDispatch, useAppSelector} from "../../hook/hooks.ts";
import {kinopoiskThunks} from "../../reducer/kinopoisk.ts";
import "../FlimsBlock/filmBlock.scss"
import {useEffect} from "react";
import {CartoonCard} from "./Cartoon/CartoonCard.tsx";



export const CartoonBlock = () => {

    const dispatch = useAppDispatch()
    const cartoons = useAppSelector(state=> state.films.cartoons)


    useEffect( ()=> {
        dispatch(kinopoiskThunks.getTopCartoon())
    },[])

    const filmsMap = cartoons.map(el=> {
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

