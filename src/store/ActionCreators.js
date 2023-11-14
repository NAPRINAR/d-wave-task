import axios from "axios";
import {moviesSlice} from "./MoviesSlice";


export const fetchMovies = async (dispatch) => {
    try{
        const response = await axios.get('http://localhost:3000/TendingNow')
        dispatch(moviesSlice.actions.getMovies(response.data))
    }
    catch(e){
        dispatch(moviesSlice.actions.getMoviesError(e.massage))
    }
}

export const fetchFeaturedVideo = async (dispatch) => {
    try{
        const response = await axios.get('http://localhost:3000/Featured')
        dispatch(moviesSlice.actions.getFeaturedMovie(response.data))
    }
    catch(e){
        dispatch(moviesSlice.actions.getMoviesError(e.massage))
    }
}

export const changeFuturedVideo = (dispatch, data) => {
    dispatch(moviesSlice.actions.changeFeautured(data))
}

