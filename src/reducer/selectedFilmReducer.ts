import {createSlice, isAction} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../utils/createAppAsyncThunk.ts";
import {SelectedMovieType, selectedFilms} from "../api/apiSelectedFilms.ts";




const initialState: SelectedMovieType[]= []



export const addSelectedFilm = createAppAsyncThunk<any, void>(
    'film/addSelectedFilm' , async (_, thunkAPI)=> {
        try {
            const response = await selectedFilms.add()
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
