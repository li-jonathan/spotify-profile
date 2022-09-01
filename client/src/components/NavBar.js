import { logout } from "../spotify";
import spotifyLogo from "../utils/images/spotify-logo.png";
import "../styles/components/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="app_nav">
      <div>
        <img className="spotify-logo" src={spotifyLogo} alt="Spotify Logo" />
      </div>
      <div className="app_nav-links">
        <Link to="/" className="app_nav-link">
          Profile
        </Link>
        <Link to="/topArtists" className="app_nav-link">
          Top Artists
        </Link>
        <Link to="/topTracks" className="app_nav-link">
          Top Tracks
        </Link>
        <button className="logout-button" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
}



export default NavBar;
