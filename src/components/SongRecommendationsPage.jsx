import { useEffect, useState } from 'react';
import { searchPlaylist, findSongs } from '../utilities/SpotifyConnect'
import SongRow from './SongRow';
import "./SongRecommendationsPage.css";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const SongRecommendationsPage = ({ weather }) => {
  const [playlist, setPlaylist] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      const plays = await searchPlaylist(weather);
      setPlaylist(plays);

      const songdata = await findSongs(plays);
      setSongs(songdata);
    })();
  },[])

  return (songs.length === 0)
  ? <div>Loading Songs…</div>
  : (
    <div>
      <ul className="user-metadata">
        <li>Recommended Songs for Weather Type: <b>{capitalize(weather)}</b></li>
      </ul>
      <hr className="line-divide"/>
      <div className="songs-list">
        {songs.items.map((song, id) => (
          <SongRow
            key={id}
            songTitle={song.track.name}
            imageUrl={song.track.album.images[0].url}
            spotifyUrl={song.track.external_urls.spotify}
          />
        ))}
      </div>
    </div>
  )
};

export default SongRecommendationsPage;
