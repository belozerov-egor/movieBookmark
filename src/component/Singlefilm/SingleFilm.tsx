import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { selectedFilmsThunks } from "../../reducer/selectedFilmReducer";
import style from "./SingleFilm.module.scss";

export const FilmCard = () => {
    const film = useAppSelector((state) => state.movie);
    const dispatch = useAppDispatch();



    const addSelectedHandler = () => {
      dispatch(selectedFilmsThunks.addSelectedFilm())
    };

    if (!film) {
      return <div>Загрузка...</div>;
    }
    return (
        <div>
            <div>
                <button onClick={addSelectedHandler}>
                    Добавить в избранное
                </button>
            </div>

                <div className={style.topCard}>
                    <div>

                            <img src={film.poster?.previewUrl} alt="" />

                        <div>

                            {film.videos && film.videos.trailers && film.videos.trailers.length > 0 && (
                                <iframe
                                    src={film.videos.trailers[0].url}
                                    title={film.videos.trailers[0].name}
                                    allowFullScreen
                                    width="360"
                                    height="200"
                                />
                            )}

                        </div>
                    </div>

                    <div>
                        <h3>Сюжет</h3>
                        <div>{film.description}</div>
                        <div>
                            <h3>Информация</h3>

                                <div>
                                    <div>Рейтинг</div>
                                    <div>{film.rating?.kp}</div>
                                    <div>{film.rating?.imdb}</div>
                                </div>

                            <div>
                                <div>Год выпуска</div>
                                <span>{film.year}</span>
                            </div>
                            <div>
                                <div>Страна</div>
                                {film.countries?.map((el, index) => (
                                    <span key={index}>{el.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>



                <span>

                        <div>
                            Бюджет&nbsp;
                            <span>
                                {film.budget?.value}
                                {film.budget?.currency}
                            </span>
                        </div>

                </span>

        </div>
    );
}
;
