import React from 'react';
import min9 from '../../assets/img/9-min.jpg'
import item3 from '../../assets/img/item3.jpg'
import it5 from '../../assets/img/двери стекл.jpg'
import it6 from '../../assets/img/перегор стекл.jpg'
import it7 from '../../assets/img/tonstekl.jpg'
import it8 from '../../assets/img/color_glass5.jpg'
import { HashLink as Link } from 'react-router-hash-link';

const jobsPreview = [
    {name: 'Офисные / межкомнатные перегородки', imgPath: item3, price: 'от 12800 руб/м²'},
    {name: 'Стеклянные козырьки', imgPath: min9, price: 'от 29700 руб/м²'},
    {name: 'Стеклянные ограждения', imgPath: it6, price: 'от 9800 руб/м²'},
    {name: 'Тонированное стекло', imgPath: it7, price: 'от 5500 руб/м²'},
    {name: 'Стеклянные двери', imgPath: it5, price: 'от 25500 руб'},
    {name: 'Цветное остекление', imgPath: it8, price: 'от 8900 руб/м²'},
]

const BsnGlass = () => {
    return (
        <section className="list-glass">
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <ul className="job-list">
                        {jobsPreview.map(({imgPath, name, price}) => (
                            <li className="job-preview" key={imgPath}>
                                <div className="content float-left">
                                    <img className="list-glass-photo" src={imgPath}/>
                                    <h4 className="job-title">
                                        {name}
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
}
export default BsnGlass;