import "../styles/components/ArtistsContainer.css";
import { Link } from 'react-router-dom';

const ArtistsContainer = ({ artists }) => (
  <>
    {artists && artists.length ? (
      <>
        {artists.map((artist, idx) => (
          <Link to={`/artist/${artist.id}`} className="artist-card_link">
            <div key={`${idx}_artist`} className="artist-card">
              <div className="artist-card_idx">{idx + 1}</div>
              {artist.images[0] && (
                <img src={artist.images[0].url} alt={artist.name} />
              )}
              <div className="artist-card_title">{artist.name}</div>
            </div>
          </Link>
        ))}
      </>
    ) : (
      <p>No artists available</p>
    )}
  </>
);

export default ArtistsContainer;
