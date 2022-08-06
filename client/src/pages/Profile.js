import { useState, useEffect } from "react";
import { catchErrors } from '../utils/utils';
import {
  getCurrentUserProfile,
  getCurrentUserFollowing,
  getCurrentUserPlaylists,
  getTopArtists,
  getTopTracks,
} from "../spotify";

import '../styles/pages/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [following, setFollowing] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  // const [topArtists, setTopArtists] = useState(null);
  // const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);

      const userFollowing = await getCurrentUserFollowing();
      setFollowing(userFollowing.data.artists);
      console.log(following)

      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylists(userPlaylists.data);

      // const userTopArtists = await getTopArtists();
      // setTopArtists(userTopArtists.data);

      // const userTopTracks = await getTopTracks();
      // setTopTracks(userTopTracks.data);
    };

    catchErrors(fetchData());
  }, []);


  return (
    <>
      {profile && (
        <>
          <div className="header">
            {profile.images.length && profile.images[0].url && (
              <img
                className="profile-img"
                src={profile.images[0].url}
                alt="Avatar"
              />
            )}
            <div className="display-name">{profile.display_name}</div>
            <div className="profile-stats">
              {playlists && (
                <span>
                  {playlists.total} Playlist{playlists.total !== 1 ? "s" : ""}
                </span>
              )}
              <span>
                {profile.followers.total} Follower
                {profile.followers.total !== 1 ? "s" : ""}
              </span>
              {following && <span>{following.total} Following</span>}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
