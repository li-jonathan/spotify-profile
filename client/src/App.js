
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { accessToken } from './spotify';
import './App.css';
import { Login, Profile, Artist, Track, PageNotFound, TopArtists } from "./pages";
import { NavBar } from './components';


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <div className="app">
          <NavBar />
          <div className="app_body">
            <Routes>
              <Route path="/artist/:id" element={<Artist />} />
              <Route path="/track/:id" element={<Track />} />
              <Route path="/topArtists" element={<TopArtists />} />
              <Route exact path="/" element={<Profile />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
