import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { catchErrors } from "../utils/utils";
import {
  getTopArtists,
} from "../spotify";
import "../styles/pages/TopArtists.css";

const TopArtists = () => {
  const [artists, setArtists] = useState(null);
  const [timeRange, setTimeRange] = useState('short');


  useEffect(() => {
    const fetchData = async () => {
      const userTopArtists = await getTopArtists(`${timeRange}_term`);
      setArtists(userTopArtists.data);
    };

    catchErrors(fetchData());
  }, [timeRange]);

  return (
    <div>
      {true && (
        <div>
          <div className="top-artists_header">
            <div className="top-artists_title">Top Artists</div>
            <div className="top-artists_time-periods">
              <button
                className={`top-artist_time-period_button ${
                  timeRange === "short"
                    ? "top-artist_time-period_button_active"
                    : ""
                }`}
                onClick={() => setTimeRange("short")}
              >
                Last 4 weeks
              </button>
              <button
                className={`top-artist_time-period_button ${
                  timeRange === "medium"
                    ? "top-artist_time-period_button_active"
                    : ""
                }`}
                onClick={() => setTimeRange("medium")}
              >
                Last 6 months
              </button>
              <button
                className={`top-artist_time-period_button ${
                  timeRange === "long"
                    ? "top-artist_time-period_button_active"
                    : ""
                }`}
                onClick={() => setTimeRange("long")}
              >
                All time
              </button>
            </div>
          </div>
          <div className="top-artists_body">
            {artists &&
              artists.items.map((artist, idx) => {
                return (
                  <Link
                    to={`/artist/${artist.id}`}
                    className="top-artists_card"
                  >
                    <div className="top-artists_card_idx">{idx + 1}</div>
                    {artist.images.length && artist.images[0].url && (
                      <img src={artist.images[0].url} alt="Artist" />
                    )}
                    <div className="top-artists_card_title">{artist.name}</div>
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopArtists;
