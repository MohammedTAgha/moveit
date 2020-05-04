import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { searchData } from "../../API";
import { topRated } from "../../API";
import { popular } from "../../API";
import Container from "../Container";
 

 
import TopNav from "./../TopNav";

const Search = () => {
  //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
  const myKey = "cd747fb3aa0887ceb7731136b85ec09f";

  // https://api.themoviedb.org/3/movie/top_rated?api_key=cd747fb3aa0887ceb7731136b85ec09f&language=en-US&page=1

  const [moveis, SetMoveis] = useState([]);   // 🎬 movie state  
  const [searchInput, SetSearchInput] = useState("");  // 🔍 search input state

  useEffect(() => {
    getRequist();
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

  const getTopRated = async () => {   //page in parametars  🏁🏁 git and sit top rated movies
    const data = await topRated(1);
    console.log(data.data);
    SetMoveis(data.data.results)
    return data;
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
      <button onClick={getTopRated}>test2</button>
      <button onClick={getPopular}>test3</button>
      
      
      <Container filmData={moveis} />
    </div>
    </Router>
  );
};


export default Search;

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
