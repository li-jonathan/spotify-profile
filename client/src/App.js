
import { useState, useEffect } from "react";
import { accessToken, logout } from './spotify';
import './App.css';
import { Login } from './pages';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

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
        </>
      )}
    </div>
  );
}

export default App;
