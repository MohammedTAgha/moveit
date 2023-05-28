import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {  Link } from "react-router-dom";

import { getMovies } from "./API";



import Film from "../src/components/Film";
const Movies = props => {
  // useEffect(() => {
  //   console.log("props is -->" + props);
  // }, []);
  const [moveis, SetMoveis] = useState([]);

  useEffect(() => {
    //if(props.whatToRender=='popular'){getPopular('popular');}
    getPopular(props.whatToRender);
  }, []);
 

  const getPopular = async (dist) => {
    //page in parametars  🏁🏁 git and sit top rated movies
    const data = await getMovies(dist,1);
     
    if(data){
      SetMoveis(data.data.results);
      console.log("🔥" + moveis);
    }
   
    return data;
  };

  return (
    <Router>
      
    <div className="film-holder">
      {/*-------------------------  */}

      {moveis.map(film => (
        <Link to={'/details/'+film.id} key={film.id} >
          <Film movie={film}  />
        </Link>
      ))}

      {/*-------------------------  */}
    </div>
    </Router>
  );
};

export default Movies;
