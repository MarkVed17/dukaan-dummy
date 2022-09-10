import "./Header.css";
import img from "../../assets/images/logo/white.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={img} alt="dukaan" />
      </div>
      <div className="header__actions">
        <button className="header__link">Sign In</button>
        <button className="header__button">Dukaan for PC</button>
      </div>
    </header>
  );
};

export { Header };
