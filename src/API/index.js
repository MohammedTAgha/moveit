import axios from 'axios';

const myKey = "cd747fb3aa0887ceb7731136b85ec09f"
export const searchData = async ( keyward )=>{
    let url =
    "https://api.themoviedb.org/3/search/movie?api_key="+myKey+"&query="+keyward;

    try {
        const data = await axios.get(url);
        return data;
    } catch (error) {
        console.log('eroor');
    }

}