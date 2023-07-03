import style from "./sideBar.module.scss"
import {NavLink} from 'react-router-dom';
import {SearchBlock} from "./SearchBlock/SearchBlock.tsx";

export const SideBar = () => {



    return (
        <div className={style.sideBar}>
            <SearchBlock/>
            <div className={style.linkBlock}>
                <NavLink to={'/'}>ВСЕ ФИЛЬМЫ</NavLink>
                <NavLink to={'/selected'}>ИЗБРАННОЕ</NavLink>
            </div>
        </div>
    );
};

