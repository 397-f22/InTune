// TODO: Add UI / UX for song recs here!
import {searchPlaylist} from '../utilities/SpotifyConnect'

const playlist = async (weather) => {
  await searchPlaylist(weather);

} 

const SongRecommendationsPage = async({ weather }) => {
  
await playlist(weather);
  console.log(playlist);
  
  return (
  <h1>{playlist.items[0].name}</h1>
  )

  };

export default SongRecommendationsPage;
