import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { searchData } from "../../API";
import { topRated } from "../../API";
import { popular } from "../../API";
import Container from "../Container";
 

 
import TopNav from "./../TopNav";

const Populer = () => {
  //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
  const myKey = "cd747fb3aa0887ceb7731136b85ec09f";

  // https://api.themoviedb.org/3/movie/top_rated?api_key=cd747fb3aa0887ceb7731136b85ec09f&language=en-US&page=1

  const [moveis, SetMoveis] = useState([]);   // 🎬 movie state  
  const [searchInput, SetSearchInput] = useState("");  // 🔍 search input state

  useEffect(() => {
    getPopular();
  }, [  ]);
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

  const getPopular = async () => {   //page in parametars  🏁🏁 git and sit top rated movies
    const data = await popular(1);
    console.log(data.data);
    SetMoveis(data.data.results)
    console.log('🔥'+moveis)
    return data;
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

  return (
    <Router>
    <div>
      <input type="text" value={searchInput} onChange={updateSearch}></input>
      <button onClick={search}>test</button>
      <button onClick={getPopular}>test3</button>
       
      
      
      <Container filmData={moveis} />
    </div>
    </Router>
  );
};


export default Populer;

