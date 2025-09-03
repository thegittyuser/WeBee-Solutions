import "./css/header.css";

function Header() {
  return (
    <>
      <section className="header">
        <div className="logo-text">
          <h2>WeBee Solutions</h2>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Skills</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="contact-btn">
          <button>Contact Me</button>
        </div>
      </section>
    </>
  );
}
export default Header;
