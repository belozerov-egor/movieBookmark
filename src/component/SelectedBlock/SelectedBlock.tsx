import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook/hooks';
import { selectedFilmsThunks } from '../../reducer/selectedFilmReducer';

export const SelectedBlock = () => {

    const selectedFilms = useAppSelector(state=> state.selectedFilms)
    const dispatch  = useAppDispatch()

    useEffect(()=> {
        dispatch(selectedFilmsThunks.getFilms())
    },[])

    const selectedMapped = selectedFilms.map(el=> <div><img src={el.image} alt="" /></div>)

    return (
        <div>
           {selectedMapped}
        </div>
    );
};

