import React from 'react';
import '../../styles/wrglr.css';
import s1 from '../../assets/img/galleryofworks/kit1.jpg'
import s2 from '../../assets/img/galleryofworks/sg3.jpg'
import s3 from '../../assets/img/galleryofworks/sh2.jpg'
import s4 from '../../assets/img/galleryofworks/sh4.jpg'
import s5 from '../../assets/img/galleryofworks/shower1.jpg'
import s6 from '../../assets/img/galleryofworks/kit2.jpg'
import { HashLink as Link } from 'react-router-hash-link';


export const WorksGallery1 = () => (
    <div className = "gal">
    
    <ul className='ul-gal'>
	<li>
		<Link to="/glass/forhome#fartuki">
			<figure>
				<img className='img-gal' src={s1} alt='Volcano and lava field against a stormy sky'/>
				<figcaption>Кухонные фартуки</figcaption>
			</figure>
		</Link>
	</li>
	<li>
		<Link to="/glass/forhome#shower"> 
			<figure>
				<img className='img-gal'src={s2} alt='Guy on a bike ok a wooden bridge with a forest backdrop'/>
				<figcaption>Душевые</figcaption>
			</figure>
		</Link>
	</li>
	<li>
		<Link to="/glass/forhome#shower">
			<figure>
				<img className='img-gal'src={s3} alt='Person standing alone in a misty forest'/>
				<figcaption>Душевые</figcaption>
			</figure>
		</Link>
	</li>
	<li>
		<Link to="/glass/forhome#shower">
			<figure>
				<img className='img-gal'src={s4} alt='Person hiking on a trail through mountains while taking a photo with phone'/>
				<figcaption>Душевые</figcaption>
			</figure>
		</Link>
	</li>
	<li>
		<Link to="/glass/forhome#shower">
			<figure>
				<img className='img-gal'src={s5} alt='Street scene with person walking and others on motorbikes, all wearing masks'/>
				<figcaption>Душевые</figcaption>
			</figure>
		</Link>
	</li>
	<li>
		<Link to="/glass/forhome#fartuki">
			<figure>
				<img className='img-gal'src={s6} alt='Fashionable-looking girl with blond hair and pink sunglasses'/>
				<figcaption>Кухонные фартуки</figcaption>
			</figure>
		</Link>
	</li>
</ul>
</div>
    
  );

export default WorksGallery1;
