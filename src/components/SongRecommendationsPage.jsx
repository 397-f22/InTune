// TODO: Add UI / UX for song recs here!
import { useEffect, useState } from 'react';
import {searchPlaylist} from '../utilities/SpotifyConnect'

var play = 'hellp'


const SongRecommendationsPage = ({weather}) => {
const [playlist,setPlaylist] = useState([]);

useEffect(() => {
  (async () => {
    const plays = await searchPlaylist(weather);
    setPlaylist(plays)
  })();
})
  return (
  <h1>{playlist}</h1>
  )

  };

export default SongRecommendationsPage;
