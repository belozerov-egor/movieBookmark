import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../utils/createAppAsyncThunk.ts";
import {selectedFilms, SelectedMovieType} from "../api/apiSelectedFilms.ts";


const initialState: SelectedMovieType[]= []



export const addSelectedFilm = createAppAsyncThunk<{newFilm: SelectedMovieType}, void>(
    'film/addSelectedFilm' , async (_, thunkAPI)=> {
        try {
            const state = thunkAPI.getState()
            const currentFilm = state.movie
            const model: SelectedMovieType = {
                country: currentFilm.countries[0].name,
                director: currentFilm.persons[0].name,
                duration: currentFilm.type !== 'tv-series' ? currentFilm.movieLength : 1,
                year: currentFilm.year.toString(),
                description: currentFilm.description,
                nameRU: currentFilm.name,
                nameEN: currentFilm.alternativeName,
                image: currentFilm.poster.previewUrl,
                trailer: currentFilm.videos?.trailers?.[0].url,
                thumbnail:  currentFilm.poster.url,
                movieId: currentFilm.id
              }

            const response = await selectedFilms.add(model)
            return {
                newFilm: response.data
            }
        }catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue(null)
        }
    }
)
export const getFilms = createAppAsyncThunk<{films: SelectedMovieType[]}, void>(
    'film/getFilms' , async (_, thunkAPI)=> {
        try {

            const response = await selectedFilms.fetchFilms()
            console.log(response.data);

            return {
                films: response.data
            }
        }catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue(null)
        }
    }
)


const slice = createSlice({
    name: 'selectedFilms',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addSelectedFilm.fulfilled, (state, action)=> {
            state.push(action.payload.newFilm)
        }).addCase(getFilms.fulfilled, (_, action)=> {
            return action.payload.films
        })
    }
})


export const selectedFilmsReducer = slice.reducer
export const selectedFilmsAction = slice.actions
export const selectedFilmsThunks = {addSelectedFilm,getFilms}
