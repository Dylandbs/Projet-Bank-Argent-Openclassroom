import { Link } from "react-router-dom";

const Logo = () => (
  <Link
    to="/"
    className="main-nav-logo"
    aria-label="Argent Bank - Page d'accueil"
  >
    <img
      className="main-nav-logo-image"
      src="/img/argentBankLogo.png"
      alt=""
    />
  </Link>
);

export default Logo;
