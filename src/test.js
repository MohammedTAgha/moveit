
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