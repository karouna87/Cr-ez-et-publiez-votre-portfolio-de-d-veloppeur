import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Accueil</Link>
      </div>

      <nav className="nav">
        <Link to="/about">À propos</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;