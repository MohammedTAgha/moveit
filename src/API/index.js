import axios from 'axios';

const myKey = "cd747fb3aa0887ceb7731136b85ec09f"
/*
?   API HTTPS
* let req =
* "https://api.themoviedb.org/3/search/movie?api_key=" +
* myKey +
* "&query=batman";
* let topRated =
* "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
* myKey +
* "&language=en-US&page=1";
* req = topRated

 */
export const searchData = async ( keyward )=>{
     
    let url =
    "https://api.themoviedb.org/3/search/movie?api_key="+myKey+"&query="+keyward;
    try {
        const data = await axios.get(url) ;
        console.log( ' 🚩🚩🚩 start data')
       // const data = await res.json();
        return data;
    } catch (error) {
        console.log('eroor');
        return null;
    }
    
}
export const topRated = async ( page )=>{
    let url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key="+myKey+"&language=en-US&page="+page

    try {
        const data = await axios.get(url);
        console.log( ' 🚩🚩🚩 start data')

        return data;
    } catch (error) {
        console.log('eroor');
        return null;
    }
}


export const popular = async ( page )=>{
    let url =
    "https://api.themoviedb.org/3/movie/popular?api_key="+myKey+"&language=en-US&page=1"//+page
   // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    try {
        const data = await axios.get(url);
        console.log( ' 🚩🚩🚩 start data')

        return data;
    } catch (error) {
        console.log('eroor');
        return null;
    }

}


export const trending = async ( )=>{
    let url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key="+myKey
   // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    try {
        const data = await axios.get(url);
        return data;
    } catch (error) {
        console.log('eroor');
        return null;
    }

}

