import React from 'react';
import {mathDuration} from "../../utils/duration";

const HeaderInfo = ({featuredMovie,togglePlay}) => {
    return (
        <div>
            {featuredMovie.Category && <div className="header__info">
                {!togglePlay ? <img className='header__background'
                                    src={require(`../../assets/${featuredMovie.CoverImage}`)} alt={''}/> :
                    <video className='header__background' src={featuredMovie.VideoUrl} autoPlay muted/>
                }
                <div className="header__infoDesc">
                    <p className="header__desc">{featuredMovie.Category}</p>
                    <img src={require(`../../assets/${featuredMovie.TitleImage}`)} className='header__title'
                         alt=""/>
                    <div className="header__subtitles">
                        <p className='header__subtitle'>{featuredMovie.ReleaseYear}</p>
                        <p className='header__subtitle'>{featuredMovie.MpaRating}</p>
                        <p className='header__subtitle'>{mathDuration(featuredMovie.Duration)}</p>
                    </div>
                    <p className='header__text'>{featuredMovie.Description}</p>
                </div>

            </div>
            }
        </div>
    );
};

export default HeaderInfo;