import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { catchErrors } from "../utils/utils";
import { getTrack, getTrackAudioFeatures } from "../spotify";

import '../styles/pages/Track.css';

const Track = () => {
  const { id } = useParams();
  const [track, setTrack] = useState(null);
  const [audioFeatures, setAudioFeatures] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const currentTrack = await getTrack(id);
      setTrack(currentTrack.data);

      const currentAudioFeatures = await getTrackAudioFeatures(id);
      setAudioFeatures(currentAudioFeatures.data);
    };

    catchErrors(fetchData());
  }, [id]);

  return (
    <div>
      {track && (
        <>
          <div className="track_header">
            {track.album.images.length && track.album.images[2] && (
              <div className="track__item__img">
                <img src={track.album.images[1].url} alt={track.name} />
              </div>
            )}
            <div>
              <div className="track_data">
                <div className="track_name">{track.name}</div>
                <div className="track_artists">
                  {track.explicit && (
                    <div className="track_data-explicit">E</div>
                  )}
                  {track.artists.map((artist) => artist.name).join(", ")}
                </div>
                <div className="track_album">
                  {track.album.name} • {track.album.release_date.substr(0, 4)}
                </div>
              </div>
            </div>
          </div>
          {/* {audioFeatures && (
            <div className="track_audio-features">
              {audioFeatures.acousticness}
              {<br />}
              {audioFeatures.danceability}
              {<br />}
              {audioFeatures.energy}
              {<br />}
              {audioFeatures.instrumentalness}
              {<br />}
              {audioFeatures.liveness}
              {<br />}
              {audioFeatures.loudness}
              {<br />}
              {audioFeatures.speechiness}
              {<br />}
              {audioFeatures.tempo}
              {<br />}
              {audioFeatures.valence}
            </div>
          )} */}
        </>
      )}
    </div>
  );
};

export default Track;