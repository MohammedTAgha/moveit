import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import styled from 'styled-components';
import '../../App.css'

const SideNav = () => {
    return ( 
        <Router>
        <div className="side-bar"> 
            <ul>
                <li>All movies</li>
                <li>Explore</li>
                <li>Top rated</li>
                
                <li><Link to='/populer' style={{ color: 'inherit', textDecoration: 'inherit'}}>populer</Link></li>
                 
                <li>Newest</li>
            </ul>
            <ul>
                <li>Action</li>
               
                <li>Drama</li>
                <li>Comidy</li>
                <li>Crime</li>
                <li>Romantic</li>
            </ul>
        </div>
        </Router>
     );
}
 
export default SideNav;