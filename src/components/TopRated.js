import React from 'react'
import '../App.css'
import imdbIcon from './imdb.svg'




const Film = (props) => {
    let films=props.movie
     
    const thumImg = "https://image.tmdb.org/t/p/w500/"
        // console.log('films')
        // console.log(films)
    console.log('🧾🧾'+ JSON.stringify(props.movie.genre_ids))
    return ( 
        //  <div></div>
        
            <div className="film">
            <img id="thum" src={thumImg+films.poster_path} alt="" />
            
            <div className="overlay">
                <div className="film-name">{films.title}</div>
                <hr />
                <div className="film-rate">
                <span>
                    <p>{films.vote_average}/10<sub><img src={imdbIcon} alt="" /></sub></p>
                </span> 
                <div className="coliction">
                    <p>drama</p>
                    <p>action</p>
                </div>
                </div>
                <hr />
                <div className="coliction">
                <p>USA</p>
                <p>2020</p>
                <p>+15</p>
                </div>
                
            </div>
            </div>

       
        
      );
}
 
export default Film;

