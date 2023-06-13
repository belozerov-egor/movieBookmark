import style from "./sideBar.module.scss"
import {NavLink} from 'react-router-dom';
import {SearchBlock} from "./SearchBlock/SearchBlock.tsx";
import {useAppDispatch} from "../../hook/hooks.ts";
import {selectedFilmsThunks} from "../../reducer/selectedFilmReducer.ts";

export const SideBar = () => {
    const dispatch = useAppDispatch();

   const  onClick = () => {
        dispatch(selectedFilmsThunks.addSelectedFilm())
    }

    return (
        <div className={style.sideBar}>
            <SearchBlock/>
            <div className={style.linkBlock}>
                <NavLink to={'/filmsBlock'}>ВСЕ ФИЛЬМЫ</NavLink>
                <NavLink to={'/filmsBlock'}>ИЗБРАННОЕ</NavLink>
            </div>
            <button onClick={onClick}>+++</button>
        </div>
    );
};

