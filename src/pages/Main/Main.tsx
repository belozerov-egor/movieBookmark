import {FilmsBlock} from "../../component/FlimsBlock/FilmsBlock.tsx";
import {CartoonBlock} from "../../component/CartoonBlock/CartoonBlock.tsx";
import {SeriesBlock} from "../../component/SeriesBlock/SeriesBlock.tsx";


export const Main = () => {
    return (
        <div>
            <div>
                <h2>Популярные фильмы</h2>
                <FilmsBlock/>
            </div>
            <div>
                <h2>Популярные мультфильмы</h2>
                <CartoonBlock/>
            </div>
            <div>
                <h2>Популярные сериалы</h2>
                <SeriesBlock/>
            </div>
        </div>
    );
};

