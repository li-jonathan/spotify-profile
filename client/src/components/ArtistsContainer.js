import "../styles/components/ArtistsContainer.css";
import ArtistCard from "./ArtistCard";

const ArtistsContainer = ({ artists }) => (
  <>
    <div>
      {artists && artists.length ? (
        <>
          {artists.map((artist, idx) => (
            <div key={idx} className="artist_container">
              <ArtistCard idx={idx+1} artist={artist} />
            </div>
          ))}
        </>
      ) : (
        <p>No artists available</p>
      )}
    </div>
  </>
);

export default ArtistsContainer;
