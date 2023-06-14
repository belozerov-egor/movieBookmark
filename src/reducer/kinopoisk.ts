import {createAppAsyncThunk} from "../utils/createAppAsyncThunk.ts";
import {ApiKinopoisk, MovieDocument} from "../api/apiKinopoisk.ts";
import {createSlice} from "@reduxjs/toolkit";




const initialState: MovieDocument[] = []


export const getFilm = createAppAsyncThunk<{ films: MovieDocument[] }, void>(
    'film/getFilm', async (_, thunkAPI) => {
            try {
                const response = await ApiKinopoisk.getFilms()
                return {
                    films: response.data.docs
                }
            }catch (e){
                console.log(e)
                return thunkAPI.rejectWithValue(null)
            }
    }
)



const slice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getFilm.fulfilled, (_, action) => {
        return action.payload.films
        })

    }
})


export const kinopoiskReducer = slice.reducer
export const kinopoiskAction = slice.actions
export const kinopoiskThunks = {getFilm}
