// TODO: Add UI / UX for song recs here!
import { render } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { searchPlaylist, findSongs } from '../utilities/SpotifyConnect'


const SongRecommendationsPage = ({ weather }) => {
  const [playlist, setPlaylist] = useState([]);
  const [songs, setSongs] = useState([]);
console.log(playlist);
  useEffect(() => {
    (async () => {
      const plays = await searchPlaylist(weather);
      setPlaylist(plays)
      let songdata = await findSongs(plays)
      setSongs(songdata)
      //console.log(songs.items[0].track.external_urls.spotify);


    })();
  },[])
             
//      <img src={playlist.images[0].url} alt="Playlist Art"/>

  if (songs.length === 0) return <div>Loading Songs…</div>
  return (
    <div>
      <div>{songs.items.map(song => (
        <div>
          <img src={song.track.album.images[0].url} alt="Song Image" />
          <a href={song.track.external_urls.spotify}>
            {song.track.name}
          </a>
        </div>
      ))}</div>
    </div>
  )

};

export default SongRecommendationsPage;
