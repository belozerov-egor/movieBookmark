import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector} from "../../hook/hooks.ts";
import { movieThunks } from "../../reducer/movieReducer.ts";



export const SearchBlock = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const searchFilms = useAppSelector(state=> state.searchFilms)

    

    const searchFilmsMap = searchFilms.map(el=> {
        const aboutFilm = ()=> {
            dispatch(movieThunks.getFilm({movieId: el.id}))
            navigate('/film')
        }
        return (
            <div>
                <img onClick={aboutFilm} src={el.poster} alt=""/>
            </div>
        )
    })

    return (
        <div>
            {searchFilmsMap}
        </div>
    );
};
