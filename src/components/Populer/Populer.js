import React, { useEffect, useState, Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Route, Switch, NavLink, Link } from "react-router-dom";
import { searchData } from "../../API";
import { topRated } from "../../API";
import { popular } from "../../API";

import Movies from "../../movies";

import Container from "../Container";

import TopNav from "./../TopNav";

const Populer = () => {
  //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
  const myKey = "cd747fb3aa0887ceb7731136b85ec09f";

  // https://api.themoviedb.org/3/movie/top_rated?api_key=cd747fb3aa0887ceb7731136b85ec09f&language=en-US&page=1

  const [moveis, SetMoveis] = useState([]); // 🎬 movie state
  const [searchInput, SetSearchInput] = useState(""); // 🔍 search input state

 

 

  const getRequist = async s => {
    if (searchInput != "") {
      const data = await searchData(searchInput);
      console.log("🔍" + searchInput);
      console.log("🏁🏁🏁🏁");
      console.log(data);
      SetMoveis(data.data.results);
      console.log("no search");
    }
  };

  const updateSearch = e => {
    SetSearchInput(e.target.value);
  };
  // const grtSearch=()=>{

  // }
  const search = () => {
    console.log("🟢🟢" + searchInput);
    getRequist(searchInput);
  };
  const getSearch = val => {
    console.log(val);
  };

  return (<Movies  whatToRender={'popular'} />)
};

export default Populer;
