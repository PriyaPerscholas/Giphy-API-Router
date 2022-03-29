import axios from "axios"
import '../App.css';

const RANDOM_URL = `https://api.giphy.com/v1/gifs/random?api_key=YMBy7iLImtOwPQN3TWXDo4AJxqeDeJ0G`
const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=YMBy7iLImtOwPQN3TWXDo4AJxqeDeJ0G`

export function getRandom() {

       const response = axios.get(RANDOM_URL)
       console.log(response)
       return response
}
export function getTrending() {
       const response = axios.get(TRENDING_URL)
       console.log(response)
       return response
}