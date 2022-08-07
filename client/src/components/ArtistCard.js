import "../styles/components/ArtistCard.css";

const ArtistCard = ({ idx, artist }) => (
  <div className="artist-card">
    <div className="artist-card_idx">{idx}</div>
    {artist.images[0] && (
      <img src={artist.images[0].url} alt={artist.name} />
    )}
    <div className="artist-card_title">{artist.name}</div>
  </div>
);

export default ArtistCard;