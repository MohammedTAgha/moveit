import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";


import Film from "../src/components/Film";
const Movies = props => {
  useEffect(() => {
    console.log("props is -->" + props);
  }, []);

  return (
    <Router>
      
    <div className="film-holder">
      {/*-------------------------  */}

      {props.movies.map(film => (
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
