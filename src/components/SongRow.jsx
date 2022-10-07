import "./SongRow.css";

const SongRow = ({ songTitle, imageUrl, spotifyUrl }) => (
  <div className="song-row">
    <img className="song-image" src={imageUrl} />
    <a className="song-link" target="_blank" href={spotifyUrl}>{songTitle}</a>
  </div>
);

export default SongRow;
