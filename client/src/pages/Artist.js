import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { catchErrors } from "../utils/utils";
import { getArtist } from '../spotify';
import '../styles/pages/Artist.css';

const Artist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const currentArtist = await getArtist(id);
      setArtist(currentArtist.data);
    };

    catchErrors(fetchData());
  }, [id]);

  return (
    <div>
      {artist && (
        <div className="artist_container">
          {artist.images.length && artist.images[0].url && (
            <img src={artist.images[0].url} alt="Artist" />
          )}
          <div className="artist_title">{artist.name}</div>
          <div className="artist_stats">
            <div className="artist_stat-item">
              <div className="artist_stat-label">Followers</div>
              <div className="artist_stat-value">
                {artist.followers.total.toLocaleString()}
              </div>
            </div>
            <div className="artist_stat-item">
              <div className="artist_stat-label">Popularity</div>
              <div className="artist_stat-value">{artist.popularity}%</div>
            </div>
            <div className="artist_stat-item">
              <div className="artist_stat-label">Genre</div>
              <div className="artist_stat-value">
                {artist.genres[artist.genres.length - 1]}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artist;
