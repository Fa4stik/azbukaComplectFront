import React from 'react';
import min9 from '../../assets/img/9-min.jpg'
import item3 from '../../assets/img/item3.jpg'
import item4 from '../../assets/img/душ.jpg'
import it5 from '../../assets/img/двери стекл.jpg'
import it6 from '../../assets/img/перегор стекл.jpg'
import '../../styles/galmain.css';


const GalleryMain = () => {
    return (
<section id="products">
    <div className="products-wrapper mb-200">
    <div class="external">
  <div class="horizontal-scroll-wrapper">

    <div class="img-wrapper slower">
      <a target="_blank" rel="noopener">
        <img className="img-gm" src={min9} alt=""/>
      </a>
    </div>

    <div class="img-wrapper faster">
      <a target="_blank" rel="noopener">
        <img className="img-gm" src={it5} alt=""/>
      </a>
    </div>

    <div class="img-wrapper slower vertical">
      <a target="_blank" rel="noopener">
        <img className="img-gm" src={it6} alt=""/>
      </a>
    </div>

    <div class="img-wrapper slower slower-down">
      <a target="_blank" rel="noopener">
        <img className="img-gm" src={item3} alt=""/>
      </a>
    </div>

    <div class="img-wrapper">
      <a target="_blank" rel="noopener">
        <img className="img-gm" src={item4} alt=""/>
      </a>
    </div>
  </div>
  

</div>
</div>
</section>
    );
};

export default GalleryMain;