import {applyMiddleware, combineReducers, configureStore} from "@reduxjs/toolkit";
import {fetchMovies} from "./ActionCreators";
import moviesReducer from "./MoviesSlice";
import thunk from "redux-thunk";




const combinedReducers = combineReducers({
    moviesReducer
})


export const setupStore = () => {
    return configureStore({
            reducer:combinedReducers,
    })
}