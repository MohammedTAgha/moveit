
}
export default app

function app() {




  //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
  const myKey = "cd747fb3aa0887ceb7731136b85ec09f"
  
 // https://api.themoviedb.org/3/movie/top_rated?api_key=cd747fb3aa0887ceb7731136b85ec09f&language=en-US&page=1
  

  const [moveis,SetMoveis]=useState([])
  const [searchInput,SetSearchInput]=useState('')
  let req = "https://api.themoviedb.org/3/search/movie?api_key="+myKey+"&query=batman"
  let topRated = "https://api.themoviedb.org/3/movie/top_rated?api_key="+myKey+"&language=en-US&page=1"
  req=topRated
  useEffect(()=>{
    getRequist()

  }, [])
  const getRequist= async ()=>{
    const response= await fetch(req)
    const data = await response.json()
    SetMoveis(data.results)
     
  }
 
  const updateSearch=(e)=>{
    SetSearchInput(e.target.value)
    

    
  }
  // const grtSearch=()=>{

  // }
  const search=()=>{
    console.log(searchInput)
    req = "https://api.themoviedb.org/3/search/movie?api_key="+myKey+"&query="+searchInput
     
    console.log(req)
    //console.log(moveis)1
    //req=topRated
    getRequist()
  }
  return (
    <div>
      
      <input type="text" value={searchInput} onChange={updateSearch} ></input>
      <button onClick={search}>test</button>
      
      <Container filmData={moveis} />
    </div>
    
  );
}

export default App;
/*
 {moveis.map((movei)=>(
    <div>
    <img src={"https://image.tmdb.org/t/p/w300/"+movei.poster_path}></img>
    <h3>{movei.title}<sup>{movei.release_date}</sup></h3>
    <hr></hr>
    </div>
    ))}
    */


    // class  App extends  {

//   //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//   const myKey = "cd747fb3aa0887ceb7731136b85ec09f"
  
//  // https://api.themoviedb.org/3/movie/top_rated?api_key=cd747fb3aa0887ceb7731136b85ec09f&language=en-US&page=1
  

//   const [moveis,SetMoveis]=useState([])
//   const [searchInput,SetSearchInput]=useState('')
//   let req = "https://api.themoviedb.org/3/search/movie?api_key="+myKey+"&query=batman"
//   let topRated = "https://api.themoviedb.org/3/movie/top_rated?api_key="+myKey+"&language=en-US&page=1"
//   req=topRated
//   useEffect(()=>{
//     getRequist()

//   }, [])
//   const getRequist= async ()=>{
//     const response= await fetch(req)
//     const data = await response.json()
//     SetMoveis(data.results)
     
//   }
 
//   const updateSearch=(e)=>{
//     SetSearchInput(e.target.value)
    

    
//   }
//   // const grtSearch=()=>{

//   // }
//   const search=()=>{
//     console.log(searchInput)
//     req = "https://api.themoviedb.org/3/search/movie?api_key="+myKey+"&query="+searchInput
     
//     console.log(req)
//     //console.log(moveis)1
//     //req=topRated
//     getRequist()
//   }
//   return (
//     <div>
      
//       <input type="text" value={searchInput} onChange={updateSearch} ></input>
//       <button onClick={search}>test</button>
      
//       {/* <Container filmData={moveis} /> */}
//     </div>
    
//   );
// }

// export default App;
// /*
//  {moveis.map((movei)=>(
//     <div>
//     <img src={"https://image.tmdb.org/t/p/w300/"+movei.poster_path}></img>
//     <h3>{movei.title}<sup>{movei.release_date}</sup></h3>
//     <hr></hr>
//     </div>
//     ))}
//     */



// working versiopn .. app










import React,{useEffect , useState, Component} from 'react'
import {searchData} from './API'
import {topRated} from './API'
import Container from './components/Container'
import Player from './components/Player'
  
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'

import './App.css';

class app extends Component{
  
  state = {
    movies:[],
    search:'fast',
    loading:false,
    txt:'',
    msg:'',
    page:1

  }
 
  // async componentDidMount(){
    
  //   const data= await searchData(this.state.search);
  //   console.log(data.data.results)
    
  //   const moviesData=data.data.results
  //   this.setState({
  //     movies:moviesData
  //   })
  //   //console.log(this.state)
  // }
  
  search = async s => {

    this.setState({ loading: true });
    const data= await searchData(s);
    this.setState({movies:data.data.results});

    console.log(data.data.results)
    console.log(`🏁🏁 ${this.state.movies} `)
  }

  // top rated
  topRatedMovies = async p => {

    this.setState({ loading: true });
    const data= await topRated(this.state.page);
   //console.log('🔴'+ data)
     this.setState({movies:data.data.results});

    // console.log(data.data.results)
   // console.log(`🏁🏁 ${this.state.movies} `)
  }



  nextPage = async  => {
    let last =this.state.page
    console.log('∷∷∷'+this.state.page)
    this.setState({page:this.state.page+1})
    this.topRatedMovies()
  }
  previosPage = async  => {
    let last =this.state.page;
    console.log(this.state.page)
    if(this.state.page!=1){
    this.setState({page:this.state.page-1})
    this.topRatedMovies()
    }
  }
   //txt=''
  // e.preventDefolt()
  onChangeHandler = async e => {
    e.preventDefault()
    
    //txt=e.target.value
    this.setState({ txt: e.target.value });
    console.log(this.state.txt)
  };

  

  get renderMovies() {
    let movies = <h1>There's no movies</h1>;
    if (this.state.movies) {
      movies = <Container filmData={this.state.movies} masage={this.state.msg}  />;
    }

    return movies;
  }
  doSearch(){

  }

  render(){
    const go= ()=>{
      this.search(this.state.txt);
      if (this.state.txt){
      
      }
    }
  //   const updateSearch=(e)=>{
  //     this.setState(e.target.value);
  //    console.log(`▶ ${SearchInput} `)
     
  //  }
    let movies=this.state.movies
    // console.log('*******')
    // console.log(movies)
    let SearchInput=''
    // const search=()=>{
    //   this.setState({
    //     search:SearchInput
    //   })
    // }
    
    
    return(
      <div>
         
          <input
            value={this.state.txt}
            onChange={e => this.onChangeHandler(e)}
            placeholder="Type something to search"
          />
          <button onClick={go}>searsh</button>
         
        {/* {
          this.renderMovies
        } */}
           
           <button onClick={this.topRatedMovies} >test</button>
           <button onClick={this.nextPage} >next</button>
           <button onClick={this.previosPage} >previos</button>
          <Container filmData={this.state.movies} />
          
          {
         // console.log(`≫ ${this.state.movies} `)
          
          }
          
      </div>
    )
  }
}
export default app




//////////////////////////



class            




class app extends Component{
  
  state = {
    movies:[],
    search:'fast',
    loading:false,
    txt:'',
    msg:'2',
    page:1

  }
  /**
   ++>> my errors naming
   *    0 => no input
   *    101 => not match search result
   *    2 => ok
   */
 
 
  search = async s => {
    if (this.state.txt !=''){
      this.setState({ loading: true });
      const data= await searchData(s);
      this.setState({movies:data.data.results});

      console.log(data.data.results)
      console.log(`🏁🏁 ${this.state.movies} `)
      console.log(`🎞 ${this.state.movies.length} `)
      if(this.state.movies.length==0){console.log('no search fond');this.state.msg=1;}
  }else{
    console.log('enter a search plese')
    this.state.msg=101
  }
  
  }

  // top rated
  topRatedMovies = async p => {

    this.setState({ loading: true });
    const data= await topRated(this.state.page);
   //console.log('🔴'+ data)
     this.setState({movies:data.data.results});

    // console.log(data.data.results)
   // console.log(`🏁🏁 ${this.state.movies} `)
  }

  populerMovies = async p => {

    this.setState({ loading: true });
    const data= await popular();
   //console.log('🔴'+ data)
     this.setState({movies:data.data.results});

    // console.log(data.data.results)
   // console.log(`🏁🏁 ${this.state.movies} `)
  }

  nextPage = async  => {
    let last =this.state.page
    console.log('∷∷∷'+this.state.page)
    this.setState({page:this.state.page+1})
    this.topRatedMovies()
  }
  previosPage = async  => {
    let last =this.state.page;
    console.log(this.state.page)
    if(this.state.page!=1){
    this.setState({page:this.state.page-1})
    this.topRatedMovies()
    }
  }
   //txt=''
  // e.preventDefolt()
  onChangeHandler = async e => {
    //e.preventDefault()
    
    //txt=e.target.value
    this.setState({ txt: e.target.value });
    console.log(this.state.txt)
  };

  

  get renderMovies() {
    let movies = <h1>There's no movies</h1>;
    if (this.state.movies) {
      movies = <Container filmData={this.state.movies} msg={this.state.msg}  />;
    }

    return movies;
  }
  get renderTest() {
    this.populerMovies()
    let movies = <h1>There's no movies</h1>;
    if (this.state.movies) {
      movies = <Container filmData={this.state.movies} msg={this.state.msg}  />;
    }
    console.log('in test')

    return movies;
  }
  doSearch(){

  }

  render(){
    const go= ()=>{
      
      this.search(this.state.txt);
      if (this.state.txt){
        this.setState({msg:'no serch'})
      }
    }
 
    
    return(
      <Router>
      <div>
          <input
            value={this.state.txt}
            onChange={e => this.onChangeHandler(e)}
            placeholder="Type something to search"
          />
          <button onClick={go}>searsh</button>
           <button onClick={this.topRatedMovies} >test</button>
           <button onClick={this.nextPage} >next</button>
           <button onClick={this.previosPage} >previos</button>
          {/* <Container filmData={this.state.movies} /> */}
         
          <Route  path="/test" >
            
            {this.renderTest}
            
          </Route>
          
      </div>
      </Router>
    )
  }
}
export default app





import './App.css';

/////////////////////////////////////


const App = () => {

  const [movies , setMovies] =useState()

  useEffect(()=>{
    getSeaech()
    console.log('🎞🎞'+JSON.stringify(movies));
  })

  const getSeaech = async ()=>{

  const data= await searchData('fast');
   console.log('🧾🧾'+JSON.stringify(data));
  setMovies(data.data.results);
  console.log('🎞🎞'+JSON.stringify(movies));
  }
 
  console.log('↡↡↡↡↡↡↡↡↡↡')
  console.log(movies)
  return ( 
    <div>
      <div>hfgdhz</div>
    <Container filmData={movies}/>
    </div>
   );
}
 
export default App;

















populer here ////////////





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



old topRated

import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { searchData } from "../../API";
import { topRated } from "../../API";
import { popular } from "../../API";
import Container from "../Container";

import Loader from "../";

import TopNav from "./../TopNav";

const TopRate = () => {
  //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
  const myKey = "cd747fb3aa0887ceb7731136b85ec09f";

  // https://api.themoviedb.org/3/movie/top_rated?api_key=cd747fb3aa0887ceb7731136b85ec09f&language=en-US&page=1

  const [moveis, SetMoveis] = useState([]); // 🎬 movie state
  const [searchInput, SetSearchInput] = useState(""); // 🔍 search input state

  useEffect(() => {
    getTopRated();
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

  const getTopRated = async () => {
    //page in parametars  🏁🏁 git and sit top rated movies
    let data = await topRated(1);
    if (!data){
      console.log('🚫🚫🚫🚫🚫')
      data=[]
    }else{
      console.log(data.data);
      SetMoveis(data.data.results);
      return data;
    }
    
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
  const getSearch = () => {

  }
  // getTopRated();

  return (
    <Router>
      <div>
        {/* <input type="text" value={searchInput} onChange={updateSearch}></input>
      <button onClick={search}>test</button>
      <button onClick={getTopRated}>test2</button> */}

        <Container filmData={moveis} getSearch={getSearch()} />
      </div>
    </Router>
  );
};

export default TopRate;





/////old deatails


<>
<div className="header">
  <div className="background">

    <div className="img">
    <img
       
      src={"https://image.tmdb.org/t/p/w1280/" + details.backdrop_path}
      alt="hellow"
    />
    </div>
    <div className="blur">
      <div className="info" id="short">
        <article>
        <p title={details.title}>{details.title}</p>
        
        
        <span className="tag">{details.tagline}</span>
        
        </article>
        
      </div>
      
      <div className="sep">
      <div class="vertical-line"></div>
      </div>
      <div className="extra-deatils">
        <main>
            <p>
            rate : {details.vote_average}.
            </p>
            <p>

            
            { genres && genres.map((genr)=>(<span>{genr.name} | </span>))}
            </p>
            <p>
            {details.original_language}.
            </p>
            <p>
            {details.runtime} MIN.
            </p>
          </main>
      </div>


    </div>
  </div>
  <img className="poster"src={thumImg+details.poster_path}alt=""/>

  
</div>

{/* <div className='details-holder'>

<div className="overview">
  <p>OVERVIEW</p>
</div>

<div className="overview-text">
"The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown."
</div>
</div> */}

<div class="wrapper">
<div class="box a">A</div>
<div class="box b">B</div>
</div> 
{/* <AwesomeComponent /> */}

</>



// style


.header {
  width: 100%;
  height: 85vh;
  margin-top: -80px;
}
.header .background {
  position: relative;
}
.header .background .blur {
  width: calc(100% - 50px);
  /* margin-left: ; */
  height: 150px;
  right: 0;
  background-color: rgb(138, 61, 61);
  bottom: 0px;
  position: absolute;
  display: flex;

  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  background: transparent;
  opacity: 1;
  /* Note: currently only Safari supports backdrop-filter */
  backdrop-filter: blur(50px);
  --webkit-backdrop-filter: blur(50px);
  background-color: rgba(255, 255, 255, 0.15);
  /* (plus shape's fill blended on top as a separate layer with 69% opacity) */
}
.header .background .blur .info{
    margin-right: 25px;
}
.header .background .blur .info article {
  margin-left: 220px;
}
.header .background .blur .info p {
  font-size: 48px;
  max-height: 55px;
  max-width: 450px;
  overflow: hidden;
  letter-spacing: 0.06em;
  text-align: left;
  color: #fff;
}

.header .background .blur .info .tag {
  color: #fff;
}
.sep {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vertical-line {
  display: inline-block;

  align-items: center;
  /* border-left: 1px solid rgb(202, 14, 14); */
  width: 2px;
  height: 100px;
  background-color: brown;
}

.header .img {
  width: 100%;
   
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
 .poster {
  z-index: 1000;
  height: 277.69px;
  width: 190px;
  margin-left: 50px;
  background-color: rgb(175, 31, 31);
  transform: translateY(-75%);
  border-radius: 10px;
  opacity: 1;
  border: 4px solid #fff;
}


.extra-deatils  {
    padding-left: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
    

}

.extra-deatils main p{
    color: #fff;
    margin-top: 4px;
}

.details-holder{
   
  width: 100%;
  
  
  margin-top: 200px;
  padding-left: 40px;
  font-size: 32px;
}
.details-holder .overview{
  width: 80%;
 


}
.details-holder .overview p{
  font-family: "Baloo Bhaina 2";
  font-weight: normal;
  font-size: 38px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #ff4d2c;

} 

.details-holder .overview p::after{
  content: "";
  display: block;
  width: 55px;
  height: 5px;
  background: transparent;
  background-color:  #ff674b;
  margin-top: -15px;
  margin-bottom: 50px;
  padding: 0;
  border-radius: 5px;

}


.wrapper {
  display: grid;
  gap: 10px;
  grid-template-columns: 150px 100px 100px 150px ;
  
  background-color: #fff;
  color: #444;
}

.box {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;

}

.box .box {
  background-color: #ccc;
  color: #444;
}

.a {
  grid-column: 1 / 4;
}

.b {
  grid-column: 4 ;
}
