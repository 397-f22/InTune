// TODO: Add UI / UX for song recs here!
import { useEffect, useState } from 'react';
import { searchPlaylist } from '../utilities/SpotifyConnect'

var play = 'hellp'


const SongRecommendationsPage = ({ weather }) => {
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    (async () => {
      console.log(weather)
      const plays = await searchPlaylist(weather);
      setPlaylist(plays)
    })();
  })
  //            <img src={playlist.images[0].url} alt="Playlist Art"/>

  console.log(playlist)
  return (
    <div>
      <h1>{playlist.name}</h1>
    </div>
  )

};

export default SongRecommendationsPage;
