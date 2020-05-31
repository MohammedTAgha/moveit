import React, { useEffect,useState } from "react";
import styled from 'styled-components'
import Slider from "react-slick";
import '../../App.css'
import { Link } from 'react-router-dom'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {getMovieDetail} from '../../API'

// export default class Casts extends Component {
//   render() {
//     const castStyle = {
//       width:'80px',
//       height:'80px',
//       backgroundColor:'#f4f'
//     }
//     const settings = {
//       dots: false,
//       infinite: true,
//       speed:100,
//       slidesToShow: 5,
//       slidesToScroll: 1
//     };
//     return (
//       <div className='slider-container'>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
          
//         <div style={{castStyle}}>
//             <p>100</p>
//         </div>
//           <div style={{castStyle}}>
//             <p>200</p>
//           </div>
//           <div style={{castStyle}}>
//             <p>75</p>
//           </div>
//           <div style={{castStyle}}>
//             <p>300</p>
//           </div>
           
//         </Slider>
//       </div>
//     );
//   }
// }


//arrows





//arrows -- end

// cast style 

function Casts (props) {

  const filmId = props.id
  const imgThum="https://image.tmdb.org/t/p/w200/"
  const noImg="https://image.tmdb.org/t/p/w200//wxt0NX2tnbAQm0eqeN1l7cXTfGX.jpg"
  const [cast, setCast] = useState()
  useEffect(() => {
    getCastsData();
    console.log('🎞 casts')
    console.log(cast)
  },[] );
  

    const getCastsData = async () => {
      //page in parametars  🏁🏁 git and sit top rated movies
      const data = await getMovieDetail('credits',filmId);
      
      setCast(data.data.cast);
      console.log("🔥" + cast);
      console.log(cast);
      return data;
    };
     
    const castStyle ={
      hight:'80px',
      width:'80px',
      backgroundColor:'#f00',
    }
    const PersonCast = styled.div`
        border-radius: 5000px;
        overflow: hidden; 

      `;
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",background: "#ddd",borderRadius:'50px' }}
            onClick={onClick}
          />
        );
      }
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#ddd",borderRadius:'50px' }}
            onClick={onClick}
          />
        );
      }
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow:5,
      slidesToScroll: 5,
      variableWidth: true,
      lazyLoad: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      className:'casts',
      arrows:true
    };
    return (
      <div className='slider-container'>
        
        <Slider {...settings}>
          {
          cast &&
            cast.map(castre =>(
              <PersonCast style={{width:180,margin:20}} >
                <Link to={`/preson/${castre.id}`}>
                  <img className='person-img' title={castre.name+'\n'+castre.character} src={imgThum+castre.profile_path} alt="d"/>
                </Link>
              </PersonCast>
            ))
            }
          
         
      </Slider>
      
      </div>

    );
  
}

export default Casts;