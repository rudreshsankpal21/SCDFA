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
        <img src="src\images\SCDFA.png" alt="SCDFA Logo" id="logo" />
        <ul>
          <Link to="/" className="li">
            <li>Home</li>
          </Link>
          <Link to="/about" className="li">
            <li>About</li>
          </Link>
          <Link to="/media" className="li">
            <li>Media</li>
          </Link>
          <Link to="/news" className="li">
            <li>News</li>
          </Link>
          <Link to="/tournament" className="li">
            <li>Tournament</li>
          </Link>
          <Link to="/contact" className="li">
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
