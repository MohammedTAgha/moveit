import React from "react";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import Film from "./TopRated";
import Movies from "../movies";
import logo from "./Img/logoo.svg";

import userImg from "./Img/user.svg";
import "../App.css";

import { TopRate } from "./";
import { Populer } from "./";
import { Newest } from "./";
import { Loader } from "./";
import { Details } from "./";
import { Search } from "./";
import { NotFound } from "./";

const Container = () => {
  return (
    <Router>
      <div>
        <div className="bg-div"></div>
        <div className="container"></div>
        <div className="page">
          <div className="content">
            <div className="head">
              <div>
                <input type="text" placeholder="Search" />

                <button className="go">Search</button>
              </div>
              <nav>
                <ul>
                  <li>MOVIES</li>
                  <li>GENERS</li>
                  <li>WISH LIST</li>
                  <li>
                    <img src={userImg} alt="user" />
                  </li>
                </ul>
              </nav>
            </div>
            <div style={{marginTop:'80px'}}>
            <Switch>
              <Route exact path="/Populer">
                <Populer />
              </Route>

              <Route exact path="/explor">
                <Search />
              </Route>
              <Route exact path="/">
                <Search />
              </Route>

              <Route exact path="/toprate">
                <TopRate />
              </Route>

              <Route exact path="/trinding">
                <Newest />
              </Route>
              <Route exact path="/details/:id">
                <Details />
              </Route>
              <Route exact path="/cont">
                <Container />
              </Route>
            <Route exact component={NotFound}></Route>
              
            </Switch>
            </div>
            <button className="nxt-pg">next</button>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Container;
