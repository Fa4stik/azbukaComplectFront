import React from 'react';
import item11 from '../../assets/img/душперстек.jpg'
import item12 from '../../assets/img/коз.jpg'
import item13 from '../../assets/img/loft_2.jpg'
import item14 from '../../assets/img/mezhkomnatnie-steklyannie-dveri.jpg'
import item15 from '../../assets/img/zerkala-art-baget-10.jpg'
import item16 from '../../assets/img/image027.jpg'
import { HashLink as Link } from 'react-router-hash-link';

const HomeGlass = () => {
    return (
        <section className="list-glass">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <ul className="job-list">
                            <li className="job-preview">
                                <div className="content float-left">
                                    <img className="list-glass-photo" src={item11}/>
                                        <h4 className="job-title">
                                           <div id='shower'>Душевая</div> 
                                        </h4>
                                        <h5 className="company">
                                            от 15000 руб/шт
                                        </h5>
                                </div>
                                <Link to="/#application">
                                    <div className="btn btn-apply float-sm-right float-xs-left">
                                        Оставить заявку
                                    </div>
                               </Link>
                            </li>
                            <li className="job-preview">
                                <div className="content float-left">
                                    <img className="list-glass-photo" src={item12}/>
                                        <h4 className="job-title">
                                            Козырек
                                        </h4>
                                        <h5 className="company">
                                            от 29700 руб/шт
                                        </h5>
                                </div>
                                <Link to="/#application">
                                    <div className="btn btn-apply float-sm-right float-xs-left">
                                        Оставить заявку
                                    </div>
                                </Link>
                            </li>
                            <li className="job-preview">
                                <div className="content float-left">
                                    <img className="list-glass-photo" src={item13}/>
                                        <h4 className="job-title">
                                            Ограждение
                                        </h4>
                                        <h5 className="company">
                                            от 9800 руб/м²
                                        </h5>
                                </div>
                                <Link to="/#application">
                                    <div className="btn btn-apply float-sm-right float-xs-left">
                                        Оставить заявку
                                    </div>
                                </Link>
                            </li>
                            <li className="job-preview">
                                <div className="content float-left">
                                    <img className="list-glass-photo" src={item14}/>
                                        <h4 className="job-title">
                                            Дверь стеклянная
                                        </h4>
                                        <h5 className="company">
                                            от 5500 руб/м²
                                        </h5>
                                </div>
                                <Link to="/#application">
                                    <div className="btn btn-apply float-sm-right float-xs-left">
                                        Оставить заявку
                                    </div>
                                </Link>
                            </li>
                            <li className="job-preview">
                                <div className="content float-left">
                                    <img className="list-glass-photo" src={item15}/>
                                        <h4 className="job-title">
                                            Зеркала
                                        </h4>
                                        <h5 className="company">
                                            от 1000 руб/м²
                                        </h5>
                                </div>
                                <Link to="/#application">
                                    <div className="btn btn-apply float-sm-right float-xs-left">
                                        Оставить заявку
                                    </div>
                                </Link>
                            </li>
                            <li className="job-preview">
                                <div className="content float-left">
                                    <img className="list-glass-photo" src={item16}/>
                                        <h4 className="job-title">
                                        <div id='fartuki'>Кухонные фартуки</div>  
                                        </h4>
                                        <h5 className="company">
                                            от 3900 руб/м²
                                        </h5>
                                </div>
                                <Link to="/#application">
                                    <div className="btn btn-apply float-sm-right float-xs-left">
                                        Оставить заявку
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomeGlass;