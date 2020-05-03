import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, NavLink, Link } from 'react-router-dom'

import '../App.css'

const SideNav = () => {
    return ( 
        <Router>
        <div className="side-bar"> 
            <ul>
                <li>All movies</li>
                <li>Top rated</li>
                <Link to="/test">
                <li>Top veiws</li>
                </Link>
                <li>Newest</li>
            </ul>
            <ul>
                <li>All movies</li>
                <li>Top rated</li>
                <li>Top veiws</li>
                <li>Newest</li>
            </ul>
        </div>
        </Router>
     );
}
 
export default SideNav;