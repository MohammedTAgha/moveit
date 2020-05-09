import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { searchData } from "../../API";
import { topRated } from "../../API";
import { trending } from "../../API";
import Container from "../Container";
 

 
import TopNav from "./../TopNav";

const Populer = () => {
  
  const [moveis, SetMoveis] = useState([]);   // 🎬 movie state  
  const [searchInput, SetSearchInput] = useState("");  // 🔍 search input state

  useEffect(() => {
    getTrinding();
  }, []);
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

  const getTrinding = async () => {   //page in parametars  🏁🏁 git and sit top rated movies
    const data = await trending();
    console.log(data.data);
    SetMoveis(data.data.results)
    console.log('🔥'+moveis)
    return data;
  };


  

  const updateSearch = e => {
    SetSearchInput(e.target.value);
  };
 
  const search = () => {
    console.log("🟢🟢" + searchInput);
    getRequist(searchInput);
  };
  

  const getSearch = () => {
    console.log('🐒🐒🐒🐒')
  }
  return (
    <Router>
    <div>
      {/* <input type="text" value={searchInput} onChange={updateSearch}></input>
      <button onClick={search}>test</button>
      <button onClick={getTrinding}>trind</button> */}
       
      <Container filmData={moveis} getSearch={getSearch()} />
    </div>
    </Router>
  );
};


export default Populer;

