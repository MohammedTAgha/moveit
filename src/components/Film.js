import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component";

import "../App.css";
import imdbIcon from "./imdb.svg";
import { withRouter } from "react-router-dom";

const Film = props => {
  // console.log('📃📃' + props.movie )
  console.log("🔑" + props.id);

  let films = props.movie;

  const thumImg = "https://image.tmdb.org/t/p/w500/";
  var release = films.release_date.slice(0, 4);

  // console.log('films')
  // console.log(films)
  //console.log('🧾🧾'+ JSON.stringify(props.movie.genre_ids))
  return (
    //  <div></div>

    <div className="film">
      <div id="thum">
        <LazyLoadImage
          alt={films.title}
          height={"100%"}
          width={"100%"}
          src={thumImg + films.poster_path}
          delayTime={5000}
          effect="blur" // use normal <img> attributes as props
        />
      </div>

      <div className="overlay">
        <div className="film-name">{films.title}</div>
        <hr />
        <div className="film-rate">
          <span>
            <p>
              {films.vote_average}/10
              <sub>
                <img src={imdbIcon} alt="" />
              </sub>
            </p>
          </span>
          <div className="coliction">
            <p>drama</p>
            <p>action</p>
          </div>
        </div>
        <hr />
        <div className="coliction">
          <p>{films.original_language}</p>
          <p>{release}</p>
          {films.adult ? <p>+10</p> : <p>+18</p>}
        </div>
      </div>
    </div>
  );
};

export default Film;
//export default withRouter(Film);
