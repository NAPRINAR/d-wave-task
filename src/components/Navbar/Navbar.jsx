import React from 'react';
import {iconsData} from "../../utils/icons";
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__layout"></div>
            <div className="navbar__wrapper">
                <ul className="navbar__list">
                    {iconsData.map(el => {
                        return <li key={el.name} className={`navbar__list__item`}>
                            <a  className={`navbar__list__link`} href='javascript:void(0)'>
                                <img className={`navbar__list__icon${el.classname} navbar__list__icon`}
                                     src={el.src}
                                     alt={el.classname.toLowerCase()}/>
                                <p className={`navbar__list__desc`}>{el.name}</p>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
            <div className='navbar__layout'></div>
        </div>

    );
};

export default Navbar;