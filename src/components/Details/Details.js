import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component";

import Movies from "../../movies";
import { Casts } from "../";
// import AwesomeComponent from "../Loading/Loading";
// import GroupComponent from "../FilmDetails/GroupComponent";
import bg from "../Img/5BwqwxMEjeFtdknRV792Svo0K1v.jpg";
import poster from "../Img/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg";
import startIcon from "../Img/startIcon.svg";

import { withRouter } from "react-router-dom";

import "./Details.css";

import { getMovieDetail, searchData } from "../../API";

const Details = props => {
  //read from url
  var movieId = props.match.params.id;
  const thumImg = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {                                             //? effect here
    getRecommendations();
    getDetails();

    // get_imdb_data();
  }, []);
  // useEffect(() => {                                             //? effect here
  //   getRecommendations();
  //   // get_imdb_data();
  // }, []);

  const get_imdb_data = () => {
    fetch("https://imdb8.p.rapidapi.com/title/get-top-crew?tconst=tt0944947", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "cefcc7bd02msh98ab52c170f7996p117befjsn06f91d1f42df"
      }
    })
      .then(response => {
        console.log("🎈🎈🎈🎈");
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const [details, setDetails] = useState({});
  const [recommendations, setRecommendations] = useState({});

  const genres = details.genres;

  const getDetails = async () => {
    //page in parametars  🏁🏁 git and sit top rated movies
    const data = await getMovieDetail("", movieId);
    console.log(data);
    if (data) {
      setDetails(data.data);

      return data;
    }
  };

  const getRecommendations = async () => {
    //page in parametars  🏁🏁 git and sit top rated movies
    const data = await getMovieDetail("recommendations", movieId);
    console.log(data);
    if (data) {
      console.log("recommendations 🔴🔴🔴");
      console.log(data.data);
      setRecommendations(data.data);
      console.log("recommendations 🟢🟢🟢");
      console.log(recommendations);
      return data;
    }
  };

  console.log(details);
  var budget = details.budget;
  if (details.budget == 0) {
    budget = false;
  }

  console.log("💰", "budget", budget);

  let itemsToRender;
  if (genres) {
    itemsToRender = genres.map(gener => {
      return <p>{gener}</p>;
    });
  } else {
    itemsToRender = "Loading...";
  }

  const gen = () => {};

  return (
    <>
      <header>
        <div className="headerImgContainer">
          <LazyLoadImage
            alt={details.title}
            width={"100%"}
            src={"https://image.tmdb.org/t/p/w1280/" + details.backdrop_path}
            effect="blur" // use normal <img> attributes as props
          />
        </div>
        {/* {details?<p>loaded</p>:<p>loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....loadeding....</p>} */}

        <div className="info">
          <div className="parent">
            <div className="box div1 ">
              <img
                className="poster"
                src={thumImg + details.poster_path}
                alt=""
              />
            </div>
            <div class="box div2">
              <main className="info-holder">
                <span className="info-title">{details.title}</span>
                <div className="info-short">
                  <span>{details.runtime} min |</span>
                  <span>
                    {genres &&
                      genres.map(genr => (
                        <span>
                          &nbsp;
                          <Link to={`/genres/${genr.id}`}>
                            <span className="genr">{genr.name}</span>
                          </Link>
                          &nbsp;,
                        </span>
                      ))}
                  </span>
                  <div className="info-tagline">{details.tagline}</div>
                  <div className="info-rate">
                    <img className="ic-star" src={startIcon} alt="rate" />
                    <p>{details.vote_average} </p>
                    <div className="zeft">
                      <span>{details.vote_count} voit count</span>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        {/* <img src={"https://image.tmdb.org/t/p/w1280/" + details.backdrop_path} alt="" className="bg"/> */}
      </header>

      <section>
        <div className="grid-container">
          <div className="overview">
            <div className="sec-title">Overview</div>
            <div className="overview-text">{details.overview}</div>
          </div>
          <div className="details">
            <dev className="sec-title">Details</dev>
            <div className="data">
              <ul>
                <li>RELESE DATE : {details.release_date}</li>
                <li>LANGUAGE : {details.original_language}</li>
                <li>runtime : {details.runtime}</li>
                <li>popularity : {details.popularity}</li>
                <li>voit rate : {details.vote_average}</li>
                {budget && <li> bodget : {budget}</li>}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="slider-container">
        <div className="slider-holder">
          <div className="sec-title">Casts</div>
          <Casts id={movieId} />
        </div>
      </section>

      <section className="slider-container">
        <div className="sec-title">Recommendations</div>

        {/* <Movies movies={recommendations} /> */}
      </section>
    </>
  );
};

export default withRouter(Details);
