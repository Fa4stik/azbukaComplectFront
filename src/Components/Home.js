import React from 'react';
import logo20bez from '../assets/img/icons/лого беж.svg'

const Home = () => {
    return (
        <section id="home" className="hero mb-200">
            <div className="check"/>
            <div className="center-photo">
                <div className="bg" />
                <div className="bg bg2"/>
                <div className="bg bg3"/>
                <div className="content">
                    <img src={logo20bez} style={{width: '550px', height: 'auto'}}/>
                </div>
            </div>
        </section>
    );
};

export default Home;