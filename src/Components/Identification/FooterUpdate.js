import React from 'react';
import logo from '../../assets/img/icons/лого беж.svg'
import {Link} from "react-router-dom";
import tg from '../../assets/img/icons/tg-bezh.png'
import vk from '../../assets/img/icons/vk-bezh.png'
import wa from '../../assets/img/icons/wa-bezh.png'
import './FooterUpdate.css'

const guids = [
    {name: 'Главная', urlPath: '/main'},
    {name: 'Стекло для дома', urlPath: '/glass/home'},
    {name: 'Стекло для бизнеса', urlPath: '/glass/business'},
    {name: 'Наши работы', urlPath: '/gallery/works'},
    {name: 'Оставить заявку', urlPath: '/#application'},
]

const addresses = [
    {
        name: 'г.Тюмень, ул. Тополиная, д.6, офис 301',
        geo: 'https://yandex.ru/maps/org/abc_siberian_glass/215911119981/?ll=65.668419%2C57.120602&z=16'
    }
]

const schedules = [
    {name: 'Понедельник-Пятница с 10:00 до 18:00'}
]

const contacts = {
    images: [
        {imgPath: tg, urlPath: 'https://t.me/abcsibglass'},
        {imgPath: vk, urlPath: 'https://vk.com/abcsibglass'},
        {imgPath: wa, urlPath: 'https://wa.me/qr/XWNBMQOCFGJVO1'}
    ],
    texts: [
        {name: 'prokofiev@azbuka-prom.ru', urlPath: 'mailto:prokofiev@azbuka-prom.ru'},
        {name: '+7 (961) 208 39 98', urlPath: 'tel:+79612083998'},
    ]
}

const FooterUpdate = () => {
    return (
        <div className="footer__container">
            <div className="footer__content__block">
                <img src={logo} alt="logo green" className="footer__logo"/>
            </div>
            <div className="footer__content__block">
                <ul className="footer__ul">
                    <li className="footer__li__header">Навигация</li>
                    {guids.map(({name, urlPath}) => (
                        <li key={name}>
                            <Link to={urlPath} className="footer__li__text">
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer__content__block">
                <ul className="footer__ul">
                    <li className="footer__li__header">Адрес</li>
                    {addresses.map(({name, geo}) => (
                        <li key={name}>
                            <a href={geo} target="_blank" className="footer__li__text">
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="footer__ul">
                    <li className="footer__li__header">Часы работы</li>
                    {schedules.map(({name}) => (
                        <li key={name}>
                            <a href="" className="footer__li__text">
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer__content__block">
                <ul className="footer__ul">
                    <li className="footer__li__header">Связь с нами</li>
                    <li className="footer__li__img">
                        {contacts.images.map(({imgPath, urlPath}) => (
                            <a key={imgPath} href={urlPath}>
                                <img src={imgPath} alt="contact img path"
                                     className="footer__li__current__img"/>
                            </a>
                        ))}
                    </li>
                    {contacts.texts.map(({name, urlPath}) => (
                        <li key={name}>
                            <a href={urlPath} className="footer__li__text">
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterUpdate;