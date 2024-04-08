import React from 'react';
import item11 from '../../assets/img/душперстек.jpg'
import item12 from '../../assets/img/коз.jpg'
import item13 from '../../assets/img/loft_2.jpg'
import item14 from '../../assets/img/mezhkomnatnie-steklyannie-dveri.jpg'
import item15 from '../../assets/img/zerkala-art-baget-10.jpg'
import item16 from '../../assets/img/image027.jpg'
import { HashLink as Link } from 'react-router-hash-link';
import "./HomePageAdaptive.css"

const jobsPreview = [
    {name: 'Душевая', price: 'от 15000 руб/шт', imgPath: item11, id: 'shower'},
    {name: 'Козырек', price: 'от 29700 руб/шт', imgPath: item12, id: 'shower1'},
    {name: 'Ограждение', price: 'от 9800 руб/м²', imgPath: item13, id: 'shower2'},
    {name: 'Дверь стеклянная', price: 'от 5500 руб/м²', imgPath: item14, id: 'shower3'},
    {name: 'Зеркала', price: 'от 1000 руб/м²', imgPath: item15, id: 'shower4'},
    {name: 'Кухонные фартуки', price: 'от 3900 руб/м²', imgPath: item16, id: 'fartuki'},
]

const HomeGlass = () => {
    return (
        <section className="list-glass">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <ul className="job-list">
                            {jobsPreview.map(({id, imgPath, name, price}) => (
                                <li className="job-preview" id='shower' key={id}>
                                    <div className="content">
                                        <img className="list-glass-photo"
                                             src={imgPath} alt="describe img"/>
                                        <h4 className="job-title">
                                            <div>{name}</div>
                                        </h4>
                                        <h5 className="company">
                                            {price}
                                        </h5>
                                    </div>
                                    <Link to="/#application">
                                        <div className="btn btn-apply float-sm-right float-xs-left">
                                            Оставить заявку
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomeGlass;