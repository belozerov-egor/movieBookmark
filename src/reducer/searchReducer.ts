import {createAppAsyncThunk} from "../utils/createAppAsyncThunk.ts";
import {ApiKinopoisk, SearchFilmType} from "../api/apiKinopoisk.ts";
import {createSlice} from "@reduxjs/toolkit";




const initialState: SearchFilmType[] = []


export const searchFilms = createAppAsyncThunk<{ searchFilms: SearchFilmType[] }, { title: string }>(
    'film/searchFilms', async (arg, thunkAPI) => {
        try {
            const response = await ApiKinopoisk.searchFilm(arg.title)
            return {
                searchFilms: response.data.docs
            }
        }catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue(null)
        }
    }
)


const slice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(searchFilms.fulfilled, (_, action)=> {
                return action.payload.searchFilms
            })
    }
})


export const searchReducer = slice.reducer
export const searchAction = slice.actions
export const searchThunks = {searchFilms}
