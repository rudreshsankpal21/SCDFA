import "./Navbar.css";

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
        <img
          src="src\images\logo.jpg"
          alt="SCDFA Logo"
          height={"100px"}
          width={"100px"}
        />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/media">Media</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/tournament">Tournament</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
