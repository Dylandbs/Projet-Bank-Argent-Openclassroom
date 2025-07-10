import { useEffect } from "react";
import Logo from "./logo";
import NavItems from "./NavItems";
import { useDispatch, useSelector } from "react-redux";
import { logout, syncCookie } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(syncCookie());
  }, [dispatch]);

  const handleClick = (e) => {
    if (isAuthenticated) {
      e.preventDefault();
      dispatch(logout());
      dispatch(syncCookie()); 
      navigate("/");
    }
  };

  return (
    <nav className="main-nav">
      <Logo />
      <NavItems
        text={isAuthenticated ? "Sign Out" : "Sign In"}
        label="Se connecter"
        path={isAuthenticated ? "/" : "/Sign_in"}
        onclick={handleClick}
      />
    </nav>
  );
};

export default Header;