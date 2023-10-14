import React from 'react';
import min9 from '../../assets/img/9-min.jpg'
import item3 from '../../assets/img/item3.jpg'
import it5 from '../../assets/img/двери стекл.jpg'
import it6 from '../../assets/img/перегор стекл.jpg'
import it7 from '../../assets/img/tonstekl.jpg'
import it8 from '../../assets/img/color_glass5.jpg'
import { HashLink as Link } from 'react-router-hash-link';



const BsnGlass = () => {
    return (
        <section class="list-glass">
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <ul class="job-list">
                        <li class="job-preview">
                            <div class="content float-left">
                                <img class="list-glass-photo" src={item3}/>
                                <h4 class="job-title">
                                    Офисные/
                                    межкомнатные
                                    перегородки
                                </h4>
                                <h5 class="company">
                                    от 12800 руб/м²
                                </h5>
                            </div>
                            <Link to="/#application">
                            <div class="btn btn-apply float-sm-right float-xs-left">
                                Оставить заявку
                            </div></Link>
                        </li>
                        <li class="job-preview">
                            <div class="content float-left">
                                <img class="list-glass-photo" src={min9}/>
                                <h4 class="job-title">
                                    Стеклянные
                                    козырьки
                                </h4>
                                <h5 class="company">
                                    от 29700 руб/м²
                                </h5>
                            </div>
                            <Link to="/#application">
                                <div class="btn btn-apply float-sm-right float-xs-left">
                                    Оставить заявку
                                </div>
                            </Link>
                        </li>
                        <li class="job-preview">
                            <div class="content float-left">
                                <img class="list-glass-photo" src={it6}/>
                                <h4 class="job-title">
                                    Стеклянные
                                    ограждения
                                </h4>
                                <h5 class="company">
                                    от 9800 руб/м²
                                </h5>
                            </div>
                            <Link to="/#application">
                                <div class="btn btn-apply float-sm-right float-xs-left">
                                    Оставить заявку
                                </div>
                            </Link>
                        </li>
                        <li class="job-preview">
                            <div class="content float-left">
                                <img class="list-glass-photo" src={it7}/>
                                <h4 class="job-title">
                                    Тонированное
                                    стекло
                                </h4>
                                <h5 class="company">
                                    от 5500 руб/м²
                                </h5>
                            </div>
                            <Link to="/#application">
                                <div class="btn btn-apply float-sm-right float-xs-left">
                                    Оставить заявку
                                </div>
                            </Link>
                        </li>
                        <li class="job-preview">
                            <div class="content float-left">
                                <img class="list-glass-photo" src={it5}/>
                                <h4 class="job-title">
                                    Стеклянные
                                    двери
                                </h4>
                                <h5 class="company">
                                    от 25500 руб
                                </h5>
                            </div>
                            <Link to="/#application">
                                <div class="btn btn-apply float-sm-right float-xs-left">
                                    Оставить заявку
                                </div>
                            </Link>
                        </li>
                        <li class="job-preview">
                            <div class="content float-left">
                                <img class="list-glass-photo" src={it8}/>
                                <h4 class="job-title">
                                    Цветное
                                    остекление
                                </h4>
                                <h5 class="company">
                                    от 8900 руб/м²
                                </h5>
                            </div>
                            <Link to="/#application">
                                <div class="btn btn-apply float-sm-right float-xs-left">
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
}
export default BsnGlass;