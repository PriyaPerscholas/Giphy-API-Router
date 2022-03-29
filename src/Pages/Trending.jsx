import { getTrending } from '../services/getRequest'
import { useState, useEffect } from 'react'
import '../App.css';

export default function Trending() {
       const [trendingGif, setTrendingGif] = useState([])
       useEffect(() => {
              getTrending()
                     .then(res => setTrendingGif(res.data.data))
       }, [])
       console.log(trendingGif)
       return (
              <div>
                     <h1 id='app1'>Trending Gif</h1>
                     <div id='app'>
                            {trendingGif.map((trend) => (
                                   <img src={trend.images.fixed_height.url} />
                            ))
                            }
                     </div>
              </div>
       )
}
