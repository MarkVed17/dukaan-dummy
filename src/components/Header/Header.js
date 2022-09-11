import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/assets/images/logo/white.svg" alt="dukaan" />
      </div>
      <div className="header__actions">
        <button className="header__link">Sign In</button>
        <button className="header__button">Dukaan for PC</button>
      </div>
    </header>
  );
};

export { Header };
