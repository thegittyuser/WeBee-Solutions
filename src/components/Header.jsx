import "./css/header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-text">
        <h2>WeBee Solutions</h2>
      </div>
      <nav className="navbar" aria-label="Main Navigation">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="contact-btn">
        <button>Contact Me</button>
      </div>
    </header>
  );
}

export default Header;
