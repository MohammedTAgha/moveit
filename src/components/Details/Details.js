import React, { useState, useEffect } from "react";
import {
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component";

import AwesomeComponent from "../Loading/Loading";
import bg from "../Img/5BwqwxMEjeFtdknRV792Svo0K1v.jpg";
import poster from "../Img/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg";

import { withRouter } from "react-router-dom";

import "./Details.css";

import { getMovieDetails, searchData } from "../../API";

const Details = props => {

  var movieId = props.match.params.id;
  const thumImg = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    getDetails();
  }, []);

  const [details, setDetails] = useState({});
  const genres=details.genres

  const getDetails = async () => {
    //page in parametars  🏁🏁 git and sit top rated movies
    const data = await getMovieDetails(movieId);
    console.log(data);
    if (data) {
      setDetails(data.data);
      console.log("♦♦♦🎵🎵" + JSON.stringify(details));
      return data;
    }
  };

  console.log("📊📊" + JSON.stringify(details));

  let itemsToRender;
  if (genres) {
    itemsToRender = genres.map(gener => {
      return <p >{gener}</p>;
    });
  } else {
    itemsToRender = "Loading...";
  }

  const gen = ()=>{

  }
 
  return (
    <>
      <div className="header">
        <div className="background">

          <div className="img">
          <img
             
            src={"https://image.tmdb.org/t/p/w1280/" + details.backdrop_path}
            alt="hellow"
          />
          </div>
          <div className="blur">
            <div className="info" id="short">
              <article>
              <p title={details.title}>{details.title}</p>
              
              
              <span className="tag">{details.tagline}</span>
              
              </article>
              
            </div>
            
            <div className="sep">
            <div class="vertical-line"></div>
            </div>
            <div className="extra-deatils">
              <main>
                  <p>
                  rate : {details.vote_average}.
                  </p>
                  <p>

                  
                  { genres && genres.map((genr)=>(<span>{genr.name} | </span>))}
                  </p>
                  <p>
                  {details.original_language}.
                  </p>
                  <p>
                  {details.runtime} MIN.
                  </p>
                </main>
            </div>


          </div>
        </div>
        <img className="poster"src={thumImg+details.poster_path}alt=""/>

        
      </div>

      {/* <div className='details-holder'>

      <div className="overview">
        <p>OVERVIEW</p>
      </div>

      <div className="overview-text">
      "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown."
      </div>
      </div> */}

  <div class="wrapper">
    <div class="box a">A</div>
    <div class="box b">B</div>
  </div> 
      {/* <AwesomeComponent /> */}
    </>
  );
};

export default withRouter(Details);
