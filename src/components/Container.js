import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


import Film from './TopRated';
import logo from './logoo.svg';
import '../App.css';

const Container = (props) => {
    // console.log('*****')
    // console.log(props.filmData)
    return ( 
    <Router>
    <div>
    <div className="bg-div">
    </div>
    <div className="container">
        <div className="nav-bar">
            <img src={logo} alt="aa"/>
        </div>
    </div>
    <div className="page">
        {/* <div className="side-bar"> 
            <ul>
                <li>All movies</li>
                <li>Top rated</li>
                <li>Top veiws</li>
                <li>Newest</li>
                
            </ul>
            <ul>

                <li>action</li>
                <li>Top rated</li>
                <li>Top veiws</li>
                <li>Newest</li>
            </ul>

        </div> */}
        <div className="content">
        <div className="film-holder">

            {/*-------------------------  */}
            <Route path="/">
            {
                
                props.filmData.map((film)=>(
                    <Film movie={film}/>
                ))
                
            }
            </Route>
             

            {/*-------------------------  */}
            
        </div>
      <button className="nxt-pg">next</button>
    
        </div>
        </div>
        </div>
        </Router>
    );
}
 
export default Container;