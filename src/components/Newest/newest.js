import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { searchData } from "../../API";
import { topRated } from "../../API";
import { trending } from "../../API";
import Container from "../Container";
 import Movies  from "../../movies";


 
import TopNav from "./../TopNav";

const Populer = () => {
  
  const [moveis, SetMoveis] = useState([]);   // 🎬 movie state  
  const [searchInput, SetSearchInput] = useState("");  // 🔍 search input state

 
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
 
  const search = () => {
    console.log("🟢🟢" + searchInput);
    getRequist(searchInput);
  };
  

  const getSearch = () => {
    console.log('🐒🐒🐒🐒')
  }
  return (
     <Movies  whatToRender={'trinding'}  /> 
    
  );
};


export default Populer;

