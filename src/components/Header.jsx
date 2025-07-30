import logo from "../../public/Globe.svg";
import "../layouts/Header.css";
function Header() {
  return (
    <header>
      <img src={logo} alt="logo" width="100%" height="100%" />
      <p>my travel journal</p>
    </header>
  );
}
export default Header;
