// import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import NavMenu from "./NavMenu";
const Nav = () => {
  return (
    <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <NavMenu />
      </nav>
    </header>
  );
};

export default Nav;
