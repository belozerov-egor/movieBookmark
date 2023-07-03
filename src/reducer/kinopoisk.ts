import {createAppAsyncThunk} from "../utils/createAppAsyncThunk.ts";
import {ApiKinopoisk, MovieDocument} from "../api/apiKinopoisk.ts";
import {createSlice} from "@reduxjs/toolkit";

type initialStateType = {
    films: MovieDocument[],
    cartoons: MovieDocument[],
    series: MovieDocument[]
}

const initialState: initialStateType = {
    films: [],
    cartoons: [],
    series: []
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
                state.cartoons = action.payload.cartoons
            })
            .addCase(getTopSeries.fulfilled, (state, action) => {
                state.series = action.payload.series
            })

    }
})

export const getFilm = createAppAsyncThunk<{ films: MovieDocument[] }, void>(
    'film/getFilm', async (_, thunkAPI) => {
        try {
            const response = await ApiKinopoisk.getMoviesWithOptions({
                page: 1,
                limit: 7,
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
export const getTopCartoon = createAppAsyncThunk<{ cartoons: MovieDocument[] }, void>(
    'film/getTopCartoon', async (_, thunkAPI) => {
        try {
            const options = {
                page: 1,
                limit: 7,
                type: "cartoon",
                year: 2023
            };
            const response = await ApiKinopoisk.getMoviesWithOptions(options)
            return {
                cartoons: response.data.docs
            }
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(null)
        }
    }
)
export const getTopSeries = createAppAsyncThunk<{ series: MovieDocument[] }, void>(
    'film/getTopSeries', async (_, thunkAPI) => {
        try {
            const options = {
                page: 1,
                limit: 7,
                type: "tv-series",
                year: 2023
            };
            const response = await ApiKinopoisk.getMoviesWithOptions(options)
            return {
                series: response.data.docs
            }
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(null)
        }
    }
)
export const kinopoiskReducer = slice.reducer
export const kinopoiskAction = slice.actions
export const kinopoiskThunks = {getFilm, getTopCartoon, getTopSeries}
