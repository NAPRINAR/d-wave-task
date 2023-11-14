import React, {useEffect, useState} from 'react';
import "./Header.scss"
import {useDispatch, useSelector} from "react-redux";
import {fetchFeaturedVideo} from "../../store/ActionCreators";
import {moviesSlice} from "../../store/MoviesSlice";
import HeaderInfo from "../HomePage/HeaderInfo";


const Header = () => {
    const dispatch = useDispatch()
    const {togglePlay,featuredMovie} = useSelector(state => state.moviesReducer)
    const {togglePlayFunc} = moviesSlice.actions

    console.log(togglePlay)

    useEffect(() => {
        dispatch(fetchFeaturedVideo)
    }, [])

    return (
        <div>
            <div className="header ">
                <div className="header__wrapper">
                    <div className="header__content">
                        <HeaderInfo featuredMovie={featuredMovie} togglePlay={togglePlay}/>
                        <div className="header__buttons">
                            <button className='header__button' onClick={() => dispatch(togglePlayFunc())}>Play</button>
                            <button className='header__button'>More Info</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;