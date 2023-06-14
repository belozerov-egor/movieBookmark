import { useAppSelector } from '../../hook/hooks';

export const FilmCard = () => {
        const film = useAppSelector(state=> state.movie)
    
    return (
        <div>
            {film.description}
        </div>
    );
};
