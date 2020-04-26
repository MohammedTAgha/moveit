import React,{useEffect , useState, Component} from 'react'
import {searchData} from './API'
import Container from './components/Container'
import Player from './components/Player'
  
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'

import './App.css';







class app extends Component{
  state = {
    movies:{}
  }








}
export default app

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