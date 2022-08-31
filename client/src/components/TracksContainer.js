import "../styles/components/TracksContainer.css";
import { Link } from "react-router-dom";

const TracksContainer = ({ tracks }) => (
  <>
    {tracks && tracks.length ? (
      <>
        {tracks.map((track, idx) => (
          <Link to={`/track/${track.id}`} className="track-card_link">
            <div key={`${idx}_track`} className="track-card">
              <div className="track-card_idx">{idx + 1}</div>
              {track.album.images.length && track.album.images[2] && (
                <img src={track.album.images[2].url} alt={track.name} />
              )}
              <div className="track_data">
                <div className="track_data-name">{track.name}</div>
                <div className="track_data-artists">
                  {track.explicit && (
                    <div className="track_data-explicit">E</div>
                  )}
                  {track.artists.map((artist) => artist.name).join(", ")}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </>
    ) : (
      <p>No tracks available</p>
    )}
  </>
);

export default TracksContainer;
