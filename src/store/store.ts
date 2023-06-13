import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {kinopoiskReducer} from "../reducer/kinopoisk.ts";
import { searchReducer} from "../reducer/searchReducer.ts";
import {selectedFilmsReducer} from "../reducer/selectedFilmReducer.ts";

const RootReducers = combineReducers({
        films: kinopoiskReducer,
        searchFilms: searchReducer,
        selectedFilms: selectedFilmsReducer
})



export const store = legacy_createStore(RootReducers, applyMiddleware(thunk))

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
