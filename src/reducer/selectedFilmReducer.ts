import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../utils/createAppAsyncThunk.ts";
import {selectedFilms} from "../api/apiSelectedFilms.ts";




const initialState: any= []


// export const searchFilms = createAppAsyncThunk<{ searchFilms: SearchFilmType[] }, { title: string }>(
//     'film/searchFilms', async (arg, thunkAPI) => {
//         try {
//             const response = await ApiKinopoisk.searchFilm(arg.title)
//             return {
//                 searchFilms: response.data.docs
//             }
//         }catch (e){
//             console.log(e)
//             return thunkAPI.rejectWithValue(null)
//         }
//     }
// )

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


const slice = createSlice({
    name: 'selectedFilms',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addSelectedFilm.fulfilled, (state, action)=> {
            state.push(action.payload.newFilm)
        })
    }
})


export const selectedFilmsReducer = slice.reducer
export const selectedFilmsAction = slice.actions
export const selectedFilmsThunks = {addSelectedFilm}
