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
                
                <li><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>All movie</Link></li>
                <li><Link to="/explor" style={{ color: 'inherit', textDecoration: 'inherit'}}>Explor</Link></li>
                <li><Link to="/toprate" style={{ color: 'inherit', textDecoration: 'inherit'}}>Top rated</Link></li>
                <li><Link to="/populer" style={{ color: 'inherit', textDecoration: 'inherit'}}>populer</Link></li>
                <li><Link to="/trinding" style={{ color: 'inherit', textDecoration: 'inherit'}}>Trinding</Link></li>
                
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