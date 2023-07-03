import {AnyAction, combineReducers} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {kinopoiskReducer} from "../reducer/kinopoisk.ts";
import {searchReducer} from "../reducer/searchReducer.ts";
import {selectedFilmsReducer} from "../reducer/selectedFilmReducer.ts";
import {movieReducer} from "../reducer/movieReducer.ts";
import {configureStore} from "@reduxjs/toolkit";

const RootReducers = combineReducers({
        films: kinopoiskReducer,
        searchFilms: searchReducer,
        selectedFilms: selectedFilmsReducer,
        movie: movieReducer
})

export const store = configureStore({
        reducer: RootReducers,
});

export type RootStateType = ReturnType<typeof RootReducers>
export type RootState =ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootStateType, unknown, AnyAction>
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>

// @ts-ignore
window.store = store
