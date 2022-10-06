// TODO: Add UI / UX for song recs here!
import { useEffect, useState } from 'react';
import { searchPlaylist, findSongs } from '../utilities/SpotifyConnect'


const SongRecommendationsPage = ({ weather }) => {
  const [playlist, setPlaylist] = useState([]);
console.log(playlist);
  useEffect(() => {
    (async () => {
      const plays = await searchPlaylist(weather);
      setPlaylist(plays)
      const songs = await findSongs(plays)
      console.log(songs);

    })();
  },[])
             
//      <img src={playlist.images[0].url} alt="Playlist Art"/>

  return (
    <div>
      <h1>{playlist.name}</h1>
    </div>
  )

};

export default SongRecommendationsPage;
