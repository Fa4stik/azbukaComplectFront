import React, {useEffect} from 'react';
import logo from '../../assets/img/icons/лого беж.svg'
import '../../styles/adaptive_logo.css'
import '../../styles/style.scss'
import '../MainPage/MainPageAdaptive.css'

const Home = () => {
    return (
        <section id="home" className="hero">
            <div className="check"/>
            <div className="center-photo">
                <div className="bg"/>
                <div className="bg bg2"/>
                <div className="bg bg3"/>
                <div className="content__logo">
                    <img src={logo} alt="main logo"/>
                </div>
            </div>
        </section>
    );
};

export default Home;