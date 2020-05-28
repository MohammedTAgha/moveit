import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";

// import { topRated } from "./API";
// import { popular } from "./API";

// import {SideNav} from './components'
import { TopRate } from "./components";
import { Populer } from "./components";
import { Newest } from "./components";
import { Loader } from "./components";
import { Details } from "./components";
import { Search } from "./components";
import { NotFound } from "./components";

import logo from "./components/Img/logoo.svg";
// import Player from "./components/Player";

import TopNav from "./components/TopNav";
import Container from "./components/MainContainer";

const App = () => {
  return (
    <Router>
      <>
        {/* <SideNav /> */}
        {/* ? =========== side nav =========== */}
        <div className="side-bar">
          <div className="container">
            <div className="nav-bar">
              <img src={logo} alt="aa" />
            </div>
          </div>
          <ul>
            <li>
              <NavLink
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                All movie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explor"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Explor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="toprate"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Top rated
              </NavLink>
            </li>
            
              <NavLink
                to="/populer"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li> 
                populer
                </li>
              </NavLink>
            
            <li>
              <NavLink
                to="/trinding"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Trinding
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>Action</li>

            <li>Drama</li>
            <li>Comidy</li>
            <li>Crime</li>
            <li>Romantic</li>
          </ul>
        </div>
        <Switch>
          <Container></Container>

          <Route exact path="/movies/">
            <Container />
          </Route>

        </Switch>

        {/* ? =========== side nav =========== */}
      </>
    </Router>
  );
};

export default App;

// class app extends Component{

//   state = {
//     movies:[],
//     search:'fast',
//     loading:false,
//     txt:'',
//     msg:'2',
//     page:1

//   }
//   /**
//    ++>> my errors naming
//    *    0 => no input
//    *    101 => not match search result
//    *    2 => ok
//    */

//   search = async s => {
//     if (this.state.txt !=''){
//       this.setState({ loading: true });
//       const data= await searchData(s);
//       this.setState({movies:data.data.results});

//       console.log(data.data.results)
//       console.log(`🏁🏁 ${this.state.movies} `)
//       console.log(`🎞 ${this.state.movies.length} `)
//       if(this.state.movies.length==0){console.log('no search fond');this.state.msg=1;}
//   }else{
//     console.log('enter a search plese')
//     this.state.msg=101
//   }

//   }

//   // top rated
//   topRatedMovies = async p => {

//     this.setState({ loading: true });
//     const data= await topRated(this.state.page);
//    //console.log('🔴'+ data)
//      this.setState({movies:data.data.results});

//     // console.log(data.data.results)
//    // console.log(`🏁🏁 ${this.state.movies} `)
//   }

//   populerMovies = async p => {

//     this.setState({ loading: true });
//     const data= await popular();
//    //console.log('🔴'+ data)
//      this.setState({movies:data.data.results});

//     // console.log(data.data.results)
//    // console.log(`🏁🏁 ${this.state.movies} `)
//   }

//   nextPage = async  => {
//     let last =this.state.page
//     console.log('∷∷∷'+this.state.page)
//     this.setState({page:this.state.page+1})
//     this.topRatedMovies()
//   }
//   previosPage = async  => {
//     let last =this.state.page;
//     console.log(this.state.page)
//     if(this.state.page!=1){
//     this.setState({page:this.state.page-1})
//     this.topRatedMovies()
//     }
//   }
//    //txt=''
//   // e.preventDefolt()
//   onChangeHandler = async e => {
//     //e.preventDefault()

//     //txt=e.target.value
//     this.setState({ txt: e.target.value });
//     console.log(this.state.txt)
//   };

//   get renderMovies() {
//     let movies = <h1>There's no movies</h1>;
//     if (this.state.movies) {
//       movies = <Container filmData={this.state.movies} msg={this.state.msg}  />;
//     }

//     return movies;
//   }
//   get renderTest() {
//     this.populerMovies()
//     let movies = <h1>There's no movies</h1>;
//     if (this.state.movies) {
//       movies = <Container filmData={this.state.movies} msg={this.state.msg}  />;
//     }
//     console.log('in test')

//     return movies;
//   }
//   doSearch(){

//   }

//   render(){
//     const go= ()=>{

//       this.search(this.state.txt);
//       if (this.state.txt){
//         this.setState({msg:'no serch'})
//       }
//     }

//     return(
//       <Router>
//       <div>
//           <input
//             value={this.state.txt}
//             onChange={e => this.onChangeHandler(e)}
//             placeholder="Type something to search"
//           />
//           <button onClick={go}>searsh</button>
//            <button onClick={this.topRatedMovies} >test</button>
//            <button onClick={this.nextPage} >next</button>
//            <button onClick={this.previosPage} >previos</button>
//           {/* <Container filmData={this.state.movies} /> */}
//           <Route exact path="/" >
//             {this.renderMovies}
//           </Route>
//           <Route  path="/test" >

//             {this.renderTest}

//           </Route>

//       </div>
//       </Router>
//     )
//   }
// }
// export default app
