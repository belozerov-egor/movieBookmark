import axios from "axios";



const instance = axios.create({
    baseURL:"http://localhost:3000",
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg3M2JjYWIxMTcyYjI5ZDRiOWIxZDUiLCJpYXQiOjE2ODY2MDA5ODIsImV4cCI6MTY4NzIwNTc4Mn0.vQVDG4vhnjFaDAyPT7hLJLFR0evehMMYFqCgiwmCDLo"
    },

})

const email = "belaz.egor@gmail.com"
const password= "12345678910"


export const apiAuth = {

    auth() {
        return instance.post("/signin", {email,password })
    }
}

export const selectedFilms = {
    add() {
        return instance.post('/movies', {
            country: "США",
            director: "Дуэйн Данэм",
            duration: 84,
            year: "1993",
            description: "Собаки и кошка преодолевают реки и горы в поисках хозяев. История о том, как сближают совместные приключения",
            nameRU: "Дорога домой",
            nameEN: "Homeward Bound",
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/d3fe26a7-8626-40ae-a26f-c5729dfaf038/300x450",
            trailer: "https://youtu.be/B9klOvnMne0",
            thumbnail: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/d3fe26a7-8626-40ae-a26f-c5729dfaf038/300x450",
            movieId: 123456789,
        })
    },

    fetchFilms () {
        return instance.get<SelectedMovieType[]>('/movies')
    }
}



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
}