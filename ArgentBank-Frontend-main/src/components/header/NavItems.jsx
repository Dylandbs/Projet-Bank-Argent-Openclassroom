import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavItems = ({ text, label, path, onclick, auth }) => {
  const profilData = useSelector((state) => state.auth.dataUser);

  return (
    <div className="main-nav-container">
      <Link
        to={path}
        className="main-nav-item"
        aria-label={label}
      >
        {auth && <p>{profilData.userName}</p>}
        <i className="fa fa-user-circle" aria-hidden="true"></i>
        {auth && <i className="fa fa-sign-out" aria-hidden="true" onClick={onclick}></i>}
        <span onClick={onclick}>{text}</span>
      </Link>
    </div>
  );
};

export default NavItems;
