import axios from "axios";

const token = localStorage.getItem('token');

const instance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        Authorization: `Bearer ${token}`
    },
});

const email = "belaz.egor@gmail.com";
const password = "12345678910";

export const apiAuth = {
    auth () {
        return instance.post("/signin", { email, password });
    },
};

export const selectedFilms = {
    add(film: SelectedMovieType) {
        return instance.post(
            "/movies", film);
    },

    fetchFilms() {
        return instance.get<SelectedMovieType[]>("/movies");
    },
};

export type SelectedMovieType = {
    country: string;
    director: string;
    duration: number;
    year: string;
    description: string;
    nameRU: string;
    nameEN: string;
    image: string;
    trailer: string;
    thumbnail: string;
    movieId: number;
};
