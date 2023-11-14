import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../../store/ActionCreators";
import Slider from "react-slick"
import "./Movies.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {moviesSlice} from "../../store/MoviesSlice";

let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 10,
    // margin:10,
    centerMode: true,
    width: 100,
};

const Movies = () => {
    const {movies} = useSelector(state => state.moviesReducer)
    const {clearTogglePlay} = moviesSlice.actions
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMovies)
    }, [])
    const {changeFeatured} = moviesSlice.actions
    const featuredChange = (el) => {
        dispatch(changeFeatured(el))
        dispatch(clearTogglePlay())
    }


    return (
        <div className='movies'>
            <div className="movies__wrapper">
                <div className='movies__carousel'>
                    <Slider {...settings}>
                        {movies && movies.map(el => {
                            return (
                                <div className='carousel__itemWrapper'>
                                    <a onClick={() => featuredChange(el)} href="javascript:void(0)"
                                       className='carousel__item'>
                                        <img className='carousel__image' src={require(`../../assets/${el.CoverImage}`)}
                                             alt=""/>
                                    </a>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>


        </div>

    );
};

export default Movies;

