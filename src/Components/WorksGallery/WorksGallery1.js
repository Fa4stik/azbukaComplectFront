import React from 'react';
import '../../styles/wrglr.css';
import s1 from '../../assets/img/galleryofworks/kit1.jpg'
import s2 from '../../assets/img/galleryofworks/sg3.jpg'
import s3 from '../../assets/img/galleryofworks/sh2.jpg'
import s4 from '../../assets/img/galleryofworks/sh4.jpg'
import s5 from '../../assets/img/galleryofworks/shower1.jpg'
import s6 from '../../assets/img/galleryofworks/kit2.jpg'
import {HashLink as Link} from 'react-router-hash-link';
import './WorksGalleryAdaptive.css';

const galleries = [
    {text: 'Кухонные фартуки', imgPath: s1, urlPath: '/glass/home#fartuki', alt: 'Volcano and lava field against a stormy sky'},
    {text: 'Душевые', imgPath: s2, urlPath: '/glass/home#shower', alt: 'Guy on a bike ok a wooden bridge with a forest backdrop'},
    {text: 'Душевые', imgPath: s3, urlPath: '/glass/home#shower', alt: 'Person standing alone in a misty forest'},
    {text: 'Душевые', imgPath: s4, urlPath: '/glass/home#shower', alt: 'Person hiking on a trail through mountains while taking a photo with phone'},
    {text: 'Душевые', imgPath: s5, urlPath: '/glass/home#shower', alt: 'Street scene with person walking and others on motorbikes, all wearing masks'},
    {text: 'Кухонные фартуки', imgPath: s6, urlPath: '/glass/home#fartuki', alt: 'Fashionable-looking girl with blond hair and pink sunglasses'},
]

export const WorksGallery1 = () => (
    <div className="gal">
        <ul className='ul-gal'>
            {galleries.map(({alt, imgPath, text, urlPath}) => (
                <li key={imgPath} className="li-gal">
                    <Link to={urlPath}>
                        <figure>
                            <img className='img-gal' src={imgPath} alt={alt}/>
                            <figcaption>{text}</figcaption>
                        </figure>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default WorksGallery1;
