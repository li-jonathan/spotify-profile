import { useState, useEffect } from "react";
import "../styles/pages/TopArtists.css";

const TopArtists = () => {
  const [artists, setArtists] = useState(null);
  const [timeRange, setTimeRange] = useState("short_term");

  return (
    <div>
      {true && (
        <div>
          <div className="top-artists_header">
            <div className="top-artists_title">Top Artists</div>
            <div className="top-artists_time-periods">
              <div>
                <button>Last 4 weeks</button>
              </div>
              <div>Last 6 months</div>
              <div>All time</div>
            </div>
          </div>
          <div className="top-artists_body"></div>
        </div>
      )}
    </div>
  );
};

export default TopArtists;
