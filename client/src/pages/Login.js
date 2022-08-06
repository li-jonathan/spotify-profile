import '../styles/pages/Login.css';
import catjam from '../utils/images/catjam.gif';

const Login = () => (
  <div className="body">
    <div className="logo-container">
      <img className="logo" src={catjam} alt="catJam" />
    </div>
    <div className="header">My Spotify Stats</div>
    <div className="button-container">
      <button className="login-button">
        <a href="http://localhost:8888/login">Login to Spotify</a>
      </button>
    </div>
  </div>
);

export default Login;