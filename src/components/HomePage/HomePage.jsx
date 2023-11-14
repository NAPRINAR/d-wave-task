import React from 'react';
import "./HomePage.scss"
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";


const HomePage = () => {


    return (
        <div className='main'>
            <div className="homepage">
                <Navbar/>
                <div className="homepage__some">
                    <Header/>
                    <Movies/>
                </div>
            </div>
        </div>


    );
};

export default HomePage;