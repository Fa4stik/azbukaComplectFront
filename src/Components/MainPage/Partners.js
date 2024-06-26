import React from 'react';
import part1 from '../../assets/img/RZD.svg'
import part2 from '../../assets/img/ARMADA.svg'
import part3 from '../../assets/img/World.svg'
import '../../styles/partners.css';
import "./MainPageAdaptive.css"

const Partners = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <h2 className="h2 margin-btm-100px">У НАС ЗАКАЗЫВАЮТ</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="timeline">
                            <li>
                                <div className="timeline-panel">
                                    <div className="logo-partners-item">
                                        <img className="logo-partners-img" src={part1} alt="partners-logo"/>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-panel">
                                    <div className="logo-partners-item">
                                        <img className="logo-partners-img" src={part2} style={{height: '350px'}}
                                             alt="partners-logo"/>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-panel">
                                    <div className="logo-partners-item">
                                        <img className="logo-partners-img" src={part3} alt="partners-logo"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;