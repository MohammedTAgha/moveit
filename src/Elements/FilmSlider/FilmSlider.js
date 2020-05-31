import React from 'react'
import Slider from "react-slick";

import Film from '../../components/Film'
function FilmSlider () {

  
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2
    }
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
       
        </Slider>
      </div>
    );
  }

  export default FilmSlider;
