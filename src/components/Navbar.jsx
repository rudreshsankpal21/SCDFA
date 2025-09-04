import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="nav-header">
        <h3>
          <marquee>
            <i>
              Official Website of Solapur City & District Football Association
            </i>
          </marquee>
        </h3>
      </div>
      <nav>
        <img src="src\images\SCDFA.jpg" alt="SCDFA Logo" id="logo" />
        <ul>
          <Link to="/" className="li">
            <a href="/">Home</a>
          </Link>
          <Link to="/about" className="li">
            <a href="/">About</a>
          </Link>
          <Link to="/media" className="li">
            <a href="/">Media</a>
          </Link>
          <Link to="/news" className="li">
            <a href="/">News</a>
          </Link>
          <Link to="/tournament" className="li">
            <a href="/">Tournament</a>
          </Link>
          <Link to="/contact" className="li">
            <a href="/">Contact Us</a>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
