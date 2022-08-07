import { useState, useEffect } from "react";
import { catchErrors } from '../utils/utils';
import {
  getCurrentUserProfile,
  getCurrentUserFollowing,
  getCurrentUserPlaylists,
  getTopArtists,
  getTopTracks,
} from "../spotify";
import { ArtistsContainer, ArtistCard } from '../components'

import '../styles/pages/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [following, setFollowing] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);

      const userFollowing = await getCurrentUserFollowing();
      setFollowing(userFollowing.data);

      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylists(userPlaylists.data);

      const userTopArtists = await getTopArtists();
      setTopArtists(userTopArtists.data);

      const userTopTracks = await getTopTracks();
      setTopTracks(userTopTracks.data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <>
      {profile && (
        <div className="profile">
          <div className="profile_header">
            {profile.images.length && profile.images[0].url && (
              <img src={profile.images[0].url} alt="Profile picture" />
            )}
            <div className="profile_display-name">{profile.display_name}</div>
            <div className="profile_stats">
              {playlists && (
                <span>
                  {playlists.total} Playlist{playlists.total !== 1 ? "s" : ""}
                </span>
              )}
              <span>
                {profile.followers.total} Follower
                {profile.followers.total !== 1 ? "s" : ""}
              </span>
              {following && <span>{following.artists.total} Following</span>}
            </div>
          </div>

          <div className="profile_body">
            <div className="profile_section">
              <div className="profile_section-header">
                <p onClick={() => console.log("top tracks")}>
                  Top artists this month
                </p>
                <button>See all</button>
              </div>
              {topArtists && <ArtistsContainer artists={topArtists.items.slice(0, 10)} />}
            </div>
            <div className="profile_section">
              <div className="profile_section-header">
                <p onClick={() => console.log("top tracks")}>
                  Top tracks this month
                </p>
                <button>See all</button>
              </div>
              {topTracks && (
                <>
                  {topTracks.items[0].name}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
