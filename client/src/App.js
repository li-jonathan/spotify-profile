
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { accessToken, logout } from './spotify';
import './App.css';
import { Login, Profile } from './pages';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div className="app">
      {!token ? (
        <Login />
      ) : (
        <>
          <button className="logout-button" onClick={logout}>
            Log Out
          </button>

          <Router>
            <Routes>
              <Route path="/" element={<Profile />} />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
