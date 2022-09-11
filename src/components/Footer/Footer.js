import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__logo">
          <img src="/assets/images/logo/white.svg" alt="dukaan" />
        </div>
        <div className="footer__actions">
          <div className="footer__group">
            <a href="https://dukaan-dummy.netlify.app/">Contact</a>
            <a href="https://dukaan-dummy.netlify.app/">FAQ's</a>
          </div>
          <div className="footer__group">
            <a href="https://dukaan-dummy.netlify.app/">Tutorials</a>
            <a href="https://dukaan-dummy.netlify.app/">Blog</a>
          </div>
          <div className="footer__group">
            <a href="https://dukaan-dummy.netlify.app/">Privacy</a>
            <a href="https://dukaan-dummy.netlify.app/">Banned Items</a>
          </div>
          <div className="footer__group">
            <a href="https://dukaan-dummy.netlify.app/">About</a>
            <div className="footer__notifications">
              <a href="https://dukaan-dummy.netlify.app/">Jobs</a>
              <span className="footer__badge">3</span>
            </div>
          </div>
          <div className="footer__group">
            <a href="https://dukaan-dummy.netlify.app/">Facebook</a>
            <a href="https://dukaan-dummy.netlify.app/">Twitter</a>
            <a href="https://dukaan-dummy.netlify.app/">LinkedIn</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer__copyright">
        <span>Dukaan 2020, All rights reserved.</span>
        <span className="footer__credits">
          <span>Made in</span>
          <img src="/assets/images/icons/flag.svg" alt="India" />
        </span>
      </div>
    </footer>
  );
};

export { Footer };
