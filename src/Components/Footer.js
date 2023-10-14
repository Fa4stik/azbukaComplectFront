import React from 'react';
import logogreen from '../assets/img/MacBook Pro 16_ - 2 1 1.svg'
import tg from '../assets/img/icons/tg-bezh.png'
import vk from '../assets/img/icons/vk-bezh.png'
import wa from '../assets/img/icons/wa-bezh.png'
import {Link, useNavigate} from "react-router-dom";



const Footer = () => {
    const navigation = useNavigate()

    return (
        <div className="container-footer w-container">
            <div className="w-row">
                <div className="footer-column w-clearfix w-col w-col-4"><img src={logogreen}
                                                                             alt="" width="150"
                                                                             className="failory-logo-image"/>

                </div>
                <div className="footer-column w-col w-col-8">
                    <div className="w-row">
                        <div className="w-col w-col-8">
                            <div className="w-row">
                                <div className="w-col w-col-7 w-col-small-6 w-col-tiny-7">
                                    <h3 className="footer-titles">Навигация</h3>
                                    <p className="footer-links">
                                    <a target="_blank" onClick={() => navigation('/main')}>
                                        <span className="footer-link">Главная<br/></span>
                                    </a>
                        
                                    <a target="_blank" onClick={() => navigation('/glass/forhome')}>
                                        <span className="footer-link">Стекло для дома<br/></span>
                                        
                                    </a>
                                    
                                    <a target="_blank" onClick={() => navigation('/glassbusiness')}>
                                        <span className="footer-link">Стекло для бизнеса<br/></span>
                                    </a>
                                    
                                    <a target="_blank" onClick={() => navigation('/worksgallery')}>
                                        <span className="footer-link">Наши работы<br/></span>
                                    </a>
                                    <Link to="/#application">
                                        <span className="footer-link">Оставить заявку</span>
                                    </Link>
                                    <span><br/></span>
                                    </p>
                                </div>
                                <div className="w-col w-col-5 w-col-small-6 w-col-tiny-5">
                                    <h3 className="footer-titles">Адрес</h3>
                                    <p className="footer-links">
                                        <span className="footer-link"><a
                                            href="https://yandex.ru/maps/org/abc_siberian_glass/215911119981/?ll=65.668419%2C57.120602&z=16">
                                            г.Тюмень, ул. Тополиная, д.6, офис 301</a><br/></span>
                                    </p>
                                    <h3 className="footer-titles">Часы работы</h3>
                                    <p className="footer-links">
                                        <a href="">
                                            <span className="footer-link">Понедельник-Пятница с 10:00 до 18:00<br/></span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column-center-mobile w-col w-col-4">
                            <h3 className="footer-titles">Связь с нами</h3>
                            <a href="https://t.me/abcsibglass" target="_blank"
                               className="footer-social-network-icons w-inline-block">
                                <img src={tg} style={{width:'20px'}} alt=""/></a>
                            <a href="https://vk.com/abcsibglass" target="_blank"
                               className="footer-social-network-icons w-inline-block">
                                <img src={vk} style={{width:'20px'}} alt=""/></a>
                            <a href="https://wa.me/qr/XWNBMQOCFGJVO1" target="_blank"
                               className="footer-social-network-icons w-inline-block">
                                <img src={wa} style={{width:'20px'}} alt=""/></a>

                            <p className="footer-description"><strong className="link-email-footer"><a
                                href="mailto:prokofiev@azbuka-prom.ru"> prokofiev@azbuka-prom.ru</a></strong>
                                <br/>
                                <a href="tel:+79612083998"> +7 (961) 208 39 98</a></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;