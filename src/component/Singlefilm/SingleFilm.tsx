import { useAppSelector } from "../../hook/hooks";
import style from "./SingleFilm.module.scss";

export const FilmCard = () => {
  const film = useAppSelector((state) => state.movie);

  return (
    <div>
     

      {film && (
        <div className={style.topCard}>
          <div>
            {film.poster?.previewUrl && (
              <img src={film.poster.previewUrl} alt="" />
            )}
               <div>
            {film.videos?.trailers && (
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
              {film.rating && (
                <div>
                  <div>Рейтинг</div>
                  <div>{film.rating.kp}</div>
                  <div>{film.rating.imdb}</div>
                </div>
              )}
              <div>
                <div>Год выпуска</div>
                <span>{film.year}</span>
              </div>
              <div>
                <div>Страна</div>
                {film.countries?.map((el) => (
                  <span>{el.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {film && (
        <span>
          {film.budget && (
            <div>
            Бюджет&nbsp;
            <span>
              {film.budget.value}
              {film.budget.currency}
            </span>
          </div>
          )}
        </span>
      )}
    </div>
  );
};
