import Logo from "./logo";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <nav className="main-nav">
      <Logo />
      <NavItems text="Sign In" label="Se connecter" path="/Sign_in" />
    </nav>
  );
};

export default Header;
