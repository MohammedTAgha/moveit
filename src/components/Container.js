import React from "react";
import  { useState, useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Film from "./TopRated";
import logo from "./Img/logoo.svg";
import {Loader} from "./";                
import "../App.css";

const Container = props => {
  

  useEffect(() => {
   console.log('🎌🎌')
   console.log(props)
  }, []);

  const renderFilm = () => {};
  return (
    <Router>
      <div>
        <div className="bg-div"></div>
        <div className="container">
          
        </div>
        <div className="page">
         
          <div className="content">
          <label>
            <input type="text" placeholder="Password"/>
          </label>
            <div className="film-holder">
              {/*-------------------------  */}
               <Loader />
                {props.filmData.map(film => (
                  <Film movie={film} />
                ))}
               

              {/*-------------------------  */}
            </div>
            <button className="nxt-pg">next</button>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Container;
