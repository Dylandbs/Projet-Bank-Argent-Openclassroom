import { Link } from "react-router-dom";

const NavItems = ({ text, label, path, onclick }) => {
  return (
    <div>
      <Link
        to={path}
        className="main-nav-item"
        aria-label={label}
        onClick={onclick}
      >
        <i className="fa fa-user-circle" aria-hidden="true"></i>
        <span className="visually-hidden">{text}</span>
      </Link>
    </div>
  );
};

export default NavItems;
