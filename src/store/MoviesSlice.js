import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    movies:[],
    featuredMovie:[],
    errorMassage:'',
    togglePlay:false,

}


 export const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        getMovies(state,action){
            state.movies = action.payload
        },
        getMoviesError(state,action){
            state.errorMassage = action.payload
        },
        getFeaturedMovie(state,action){
            state.featuredMovie = action.payload
        },
        changeFeatured(state,action){
            state.featuredMovie = action.payload
        },
        togglePlayFunc(state,action){
            state.togglePlay = !state.togglePlay
        },
        clearTogglePlay(state,action){
            state.togglePlay = false
        }

    }
})

export default moviesSlice.reducer
