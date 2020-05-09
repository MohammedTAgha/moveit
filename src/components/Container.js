import React from "react";
import  { useState, useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Film from "./TopRated";
import logo from "./Img/logoo.svg";
import {Loader} from "./";  
import userImg from './Img/user.svg'              
import "../App.css";

const Container = props => {
  

  useEffect(() => {
   console.log('🎌🎌')
   console.log(props)
    
  }, []);

  const [searchInput, SetSearchInput] = useState("");

  const updateSearch = e => {
    SetSearchInput(e.target.value);
    console.warn(searchInput)
  };
  // const grtSearch=()=>{

  // }
  const search = () => {
     
    props.getSearch()
    console.log("⬇⬇⬇" + searchInput);

    // getRequist(searchInput);
  };

  const renderFilm = () => {};
  return (
    <Router>
      <div>
        <div className="bg-div"></div>
        <div className="container">
          
        </div>
        <div className="page">
         
          <div className="content">

          <div className="head">
            <div>
            <input type="text" value={searchInput} onChange={updateSearch} placeholder="Search"/>
             
            <button className="go" onClick={search}>
              Search
              
              </button>
            </div>
           <nav>
             <ul>
               <li>MOVIES</li>
               <li>GENERS</li>
               <li>WISH LIST</li>
               <li><img src={userImg} alt="user"/></li>
               
             </ul>
           
           </nav>
          </div >
          
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
