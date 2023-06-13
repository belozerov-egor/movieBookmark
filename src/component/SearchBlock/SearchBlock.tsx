import { useAppSelector} from "../../hook/hooks.ts";



export const SearchBlock = () => {
    const searchFilms = useAppSelector(state=> state.searchFilms)


    const searchFilmsMap = searchFilms.map(el=> {
        return (
            <div>
                <img src={el.poster} alt=""/>
            </div>
        )
    })

    return (
        <div>
            {searchFilmsMap}
        </div>
    );
};
