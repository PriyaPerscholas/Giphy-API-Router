import { getRandom } from '../services/getRequest'
import { useState, useEffect } from 'react'
import '../App.css';
export default function Home() {
       //save api response into state variable
       const [randomGif, setRandomGif] = useState([])

       useEffect(() => {
              getRandom()
                     .then(res => setRandomGif(res.data.data.images.downsized_large.url))
       }, [])
       console.log(randomGif)

       function handleclick() {
              getRandom()
                     .then(res => setRandomGif(res.data.data.images.downsized_large.url))
       }
       return (
              <div id='app3'>
                     <h1 id='app2'>Random Gif</h1>
                     <div >
                            <img src={randomGif} />
                            <br />
                            <input id='btn' type="button" onClick={handleclick} value="Click Me"></input>
                     </div>
              </div>
       )
}