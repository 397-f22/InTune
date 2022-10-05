// TODO: Add UI / UX for song recs here!
import { useEffect, useState } from 'react';
import { searchPlaylist } from '../utilities/SpotifyConnect'


//TODO: Use effect is spamming API calls need to check if already instatiated/called playlist
const SongRecommendationsPage = ({ weather }) => {
  const [playlist, setPlaylist] = useState([]);
console.log(playlist);
  useEffect(() => {
    (async () => {
      const plays = await searchPlaylist(weather);
      setPlaylist(plays)
    })();
  })
             
//      <img src={playlist.images[0].url} alt="Playlist Art"/>

  return (
    <div>
      <h1>{playlist.name}</h1>
    </div>
  )

};

export default SongRecommendationsPage;
