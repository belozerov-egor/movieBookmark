import { ApiKinopoisk, MovieDocument } from "../api/apiKinopoisk.ts";
import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "../utils/createAppAsyncThunk.ts";

const initialState: MovieDocument = {} as MovieDocument;

export const getFilm = createAppAsyncThunk<
  { film: MovieDocument },
  { movieId: number }
>("film/getFilm", async (arg, thunkApi) => {
  try {
    const response = await ApiKinopoisk.getFilm(arg.movieId);
    return {
      film: response.data,
    };
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue(null);
  }
});

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

const slice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilm.fulfilled, (_, action) => {
      return action.payload.film;
    });
  },
});

export const movieReducer = slice.reducer;
export const movieAction = slice.actions;
export const movieThunks = {getFilm};
