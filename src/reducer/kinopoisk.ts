import {createAppAsyncThunk} from "../utils/createAppAsyncThunk.ts";
import {ApiKinopoisk, MovieDocument} from "../api/apiKinopoisk.ts";
import {createSlice} from "@reduxjs/toolkit";


const initialState: { films: MovieDocument[] } = {
    films: []
}


const slice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getFilm.fulfilled, (state, action) => {
            state.films = action.payload.films
        })
            .addCase(getTopCartoon.fulfilled, (state, action) => {
                state.films = action.payload.films
            })

    }
})


export const kinopoiskReducer = slice.reducer


export const getFilm = createAppAsyncThunk<{ films: MovieDocument[] }, void>(
    'film/getFilm', async (_, thunkAPI) => {
        try {
            const response = await ApiKinopoisk.getFilms({
                page: 1,
                limit: 12,
                type: "movie",
                year: 2023
            })
            return {
                films: response.data.docs
            }
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(null)
        }
    }
)
export const getTopCartoon = createAppAsyncThunk<{ films: MovieDocument[] }, void>(
    'film/getTopCartoon', async (_, thunkAPI) => {
        try {
            const options = {
                page: 1,
                limit: 12,
                type: "cartoon",
                year: 2023
            };
            const response = await ApiKinopoisk.getMoviesWithOptions(options)
            return {
                films: response.data.docs
            }
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(null)
        }
    }
)
export const kinopoiskAction = slice.actions
export const kinopoiskThunks = {getFilm, getTopCartoon}
