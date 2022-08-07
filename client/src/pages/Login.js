import '../styles/pages/Login.css';
import catjam from '../utils/images/catjam.gif';

const Login = () => (
  <div className="login">
    <div className="login_logo-container">
      <img className="login_logo" src={catjam} alt="catJam" />
    </div>
    <div className="login_header">My Spotify Stats</div>
    <div className="login_button-container">
      <button className="login_button">
        <a href="http://localhost:8888/login">Login to Spotify</a>
      </button>
    </div>
  </div>
);

export default Login;